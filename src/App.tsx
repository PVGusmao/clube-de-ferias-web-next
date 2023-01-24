import { useContext, useEffect } from "react";

import { IMyContext, MyContext } from "./context/MyContext";

import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { Blog } from "./pages/Blog/Blog";
import { Plans } from "./pages/Plans/Plans";
import { AboutUs } from "./pages/AboutUs/AboutUs";

import { RedirectPage } from "./components/atomos/RedirectPageAtom";
import { TalkToUs } from "./pages/TalkToUs/TalkToUs";

import api from "./services/api";
import { NavBarMolecule } from "./components/moleculas/NavBarMolecule";

import { navLinks, socialMedia, navigation } from "./constants";

import logo from "./assets/logo-red.png";
import { FooterOrganism } from "./components/organismos/FooterOrganism";
import { NewsOrganism } from "./components/organismos/NewsOrganism";

function App() {
  const { setAllSiteTexts } = useContext(MyContext) as IMyContext;

  async function getAllSiteTexts() {
    try {
      const response = await api.get("/pages/paulo");

      setAllSiteTexts(response as any);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllSiteTexts();
  }, []);

  return (
    <>
      <NavBarMolecule
        className=" bg-white flex items-center w-full justify-between px-8 sm:px-0 sm:justify-evenly h-20"
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fale-conosco" element={<TalkToUs />} />

        <Route
          path="/tik-tok"
          element={<RedirectPage to={"http://www.tiktok.com/@clubedeferias"} />}
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
            <RedirectPage to={"http://www.instagram.com/oclubedeferias"} />
          }
        />
      </Routes>

      <NewsOrganism />
      <FooterOrganism navigation={navigation} />
    </>
  );
}

export default App;
