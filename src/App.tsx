import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { IMyContext, MyContext } from "./context/MyContext";

import "./App.css";

import { Route, Routes } from "react-router-dom";

import { navLinks, socialMedia, navigation } from "./constants";

import { FaWhatsappSquare } from "react-icons/fa";

import Home from "./pages/Home";
import { Blog } from "./pages/Blog/Blog";
import { Plans } from "./pages/Plans/Plans";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { TalkToUs } from "./pages/TalkToUs/TalkToUs";

import { RedirectPage } from "./components/atomos/RedirectPageAtom";

import { NavBarMolecule } from "./components/moleculas/NavBarMolecule";

import { NewsOrganism } from "./components/organismos/NewsOrganism";
import { FooterOrganism } from "./components/organismos/FooterOrganism";

import api from "./services/api";

import logo from "./assets/logo-red.png";
import { BlogPost } from "./pages/BlogPost";
import Sidebar from "./components/atomos/SideBarAtom";

function App() {
  const { setAllSiteTexts } = useContext(MyContext) as IMyContext;
  const { showMenu, setShowMenu } = useContext(MyContext) as IMyContext;

  const [linkWhatsApp, setLinkWhatsApp] = useState({});

  async function getAllSiteTexts() {
    try {
      const response = await api.get("/pages/paulo");

      setAllSiteTexts(response as any);
    } catch (error) {
      console.log(error);
    }
  }

  async function getWhatsappLink() {
    try {
      const response = await api.get("/links");

      setLinkWhatsApp(response as any);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllSiteTexts();
    getWhatsappLink();
  }, []);

  return (
    <>
      <div>
        <NavBarMolecule
          className="text-white flex items-center w-full justify-between px-8 sm:px-0 sm:justify-evenly h-20"
          pageId="home"
          textLinkProps={{
            textClassName:
              "sm:block hover:text-[red] font-semibold hidden text-[darkgray]",
            className:
              "w-32 cursor-pointer text-white hover:border-2 hover:border-b-[red]",
          }}
          logoProps={{
            logo: logo,
            className: "w-32",
          }}
          navLinks={navLinks}
          socialMediaProps={{
            socialMedia: socialMedia,
            color: "red",
            size: 24,
          }}
          burgerMenuProps={{
            color: "black",
          }}
        />
        {!showMenu && (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<AboutUs />} />
              {/* <Route path="/planos" element={<Plans />} /> */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blogPost/:slug" element={<BlogPost />} />

              <Route path="/fale-conosco" element={<TalkToUs />} />

              <Route
                path="/tik-tok"
                element={
                  <RedirectPage to={"http://www.tiktok.com/@clubedeferias"} />
                }
              />
              <Route
                path="/facebook"
                element={
                  <RedirectPage
                    to={"http://www.facebook.com/clubedeferiasstellabarros"}
                  />
                }
              />
              <Route
                path="/instagram"
                element={
                  <RedirectPage
                    to={"http://www.instagram.com/oclubedeferias"}
                  />
                }
              />
            </Routes>

            <NewsOrganism />
            <FooterOrganism navigation={navigation} />
          </>
        )}
      </div>
      {showMenu && <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />}
    </>
  );
}

export default App;
