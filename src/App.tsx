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

function App() {
  const { setAllSiteTexts, allSiteTexts, showMenu, setShowMenu } = useContext(
    MyContext
  ) as IMyContext;

  async function item() {
    const response = await api.get("/pages");
    localStorage.setItem("home", JSON.stringify(response));
    setAllSiteTexts(response as any);
  }

  useEffect(() => {
    item();
  }, []);

  return (
    <>
      <div>
        <NavBarMolecule />
        {!showMenu && (
          <>
            {allSiteTexts && (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blogPost/:slug" element={<BlogPost />} />
                <Route path="/fale-conosco" element={<TalkToUs />} />
              </Routes>
            )}

            <NewsOrganism />
            <FooterOrganism />
          </>
        )}
      </div>
      {showMenu && <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />}
    </>
  );
}

export default App;
