import { useContext, useEffect } from "react";

import Sidebar from "../../components/atomos/SideBarAtom";

import teste from '../../assets/imageBlog1.png'

import { IMyContext, MyContext } from "../../context/MyContext";

import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { PlanningAboutUsOrganism } from "../../components/organismos/PlanningAboutUsOrganism";
import { NewWayTravelAboutUsOrganism } from "../../components/organismos/NewWayTravelAboutUsOrganism";
import { BenefitsAboutUsOrganism } from "../../components/organismos/BenefitsAboutUsOrganism";
import { FooterOrganism } from "../../components/organismos/FooterOrganism";
import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { NewsOrganism } from "../../components/organismos/NewsOrganism";
import { BackgroundImageAtom } from "../../components/atomos/BackgroundImageAtom";
import { navigation } from "../../constants/AboutUs";

export function AboutUs() {

  const {showMenu, setShowMenu, location, setLocation} = useContext(MyContext) as IMyContext;

  useEffect(() => {
    setLocation(window.location.href.split('/')[window.location.href.split('/').length - 1])
  }, [])

  return (
    <>
      {
        !showMenu &&
        <div>
          <HeaderAbout />

          <NewWayTravelAboutUsOrganism />

          <PlanningAboutUsOrganism />

          <BenefitsAboutUsOrganism />

          <BlogOrganism className={"flex items-start h-full sm:mt-36 mb-4 flex-col"}/>

          <NewsOrganism />

          <FooterOrganism navigation={navigation}/>
        </div>    
      }

      {
        showMenu
        && <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          className="h-96"
        />
      }
    </>
  )
}