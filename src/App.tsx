import { useContext, useEffect } from 'react';

import { IMyContext, MyContext } from './context/MyContext';

import './App.css';

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { Blog } from "./pages/Blog/Blog";
import { Plans } from "./pages/Plans/Plans";
import { AboutUs } from "./pages/AboutUs/AboutUs";

import { RedirectPage } from "./components/atomos/RedirectPageAtom";
import { TalkToUs } from './pages/TalkToUs/TalkToUs';

import api from './services/api';

function App() {

  const {setAllSiteTexts} = useContext(MyContext) as IMyContext;

  async function getAllSiteTexts() {
    try {
      const response = await api.get('/pages/Home');
      setAllSiteTexts(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllSiteTexts();
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<AboutUs />} />
      <Route path="/planos" element={<Plans />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/fale-conosco" element={<TalkToUs />} />

      <Route path='/tik-tok'  element={<RedirectPage to={'http://www.tiktok.com/@clubedeferias'} />} />
      <Route path='/facebook' element={<RedirectPage to={'http://www.facebook.com/clubedeferiasstellabarros'} />} />
      <Route path='/instagram' element={<RedirectPage to={'http://www.instagram.com/oclubedeferias'} />} />
    </Routes>
  );
}

export default App;
