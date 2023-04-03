import { useContext, useEffect, useState } from "react";
import { IMyContext, MyContext } from "./context/MyContext";

import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { Blog } from "./pages/Blog/Blog";
import { BlogPost } from "./pages/BlogPost";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { TalkToUs } from "./pages/TalkToUs/TalkToUs";

import Sidebar from "./components/atomos/SideBarAtom";
import { NewsOrganism } from "./components/organismos/NewsOrganism";
import { NavBarMolecule } from "./components/moleculas/NavBarMolecule";
import { FooterOrganism } from "./components/organismos/FooterOrganism";

import api from "./services/api";

import logo from './assets/logo-aviao-grande.png';
import { ImageAtom } from "./components/atomos/ImageAtome";
import { ModalAlert } from "./components/moleculas/ModalMolecule";

function App() {
  const { setAllHeaderTexts, loading, showMenu, setShowMenu, showModal, setShowModal,
    bodyTextModal, buttonTextModal } = useContext(MyContext) as IMyContext;

  async function getTextsForHome() {
    const response = await api.get("/pages/header");
    localStorage.setItem("header", JSON.stringify(response));
    setAllHeaderTexts(response as any);
  }

  useEffect(() => {
    getTextsForHome();
  }, []);


  return (
    <>
      {
        showModal
        && <ModalAlert
          bodyText={bodyTextModal}
          buttonText={buttonTextModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }
      {
        !loading
          && <ImageAtom className='w-[200px] left-[100px] top-[200px] sm:flex relative sm:w-[300px] sm:left-[480px] sm:top-[240px]' source={logo} alt='logo loading' />    
      }
      {
        loading && <NavBarMolecule />
      }
        {!showMenu && (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blogPost/:slug" element={<BlogPost />} />
              <Route path="/fale-conosco" element={<TalkToUs />} />
            </Routes>
            
            {
              loading && <NewsOrganism />
            }

            {
              loading && <FooterOrganism />
            }
          </>
        )}
      {showMenu && <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />}
    </>
  );
}

export default App;
