import { useContext, useEffect, useState } from "react";

import { IMyContext, MyContext } from "./context/MyContext";

import logo from "./assets/logo-red.png";

import "./App.css";

import { Route, Routes } from "react-router-dom";

import { navLinks, socialMedia, navigation } from "./constants/Home";

import Home from "./pages/Home";
import { Blog } from "./pages/Blog/Blog";
import { BlogPost } from "./pages/BlogPost";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { TalkToUs } from "./pages/TalkToUs/TalkToUs";

import Sidebar from "./components/atomos/SideBarAtom";
import { NewsOrganism } from "./components/organismos/NewsOrganism";
import { RedirectPage } from "./components/atomos/RedirectPageAtom";
import { NavBarMolecule } from "./components/moleculas/NavBarMolecule";
import { FooterOrganism } from "./components/organismos/FooterOrganism";

import api from "./services/api";

function App() {
  const { setAllSiteTexts, allSiteTexts, showMenu, setShowMenu } = useContext(
    MyContext
  ) as IMyContext;

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
              "sm:block hover:text-[darkgray] font-semibold hidden text-[#F20F0F]",
            className:
              "w-32 cursor-pointer text-white hover:border-2 hover:border-b-[darkgray]",
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
