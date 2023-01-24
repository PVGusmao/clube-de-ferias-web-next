import { useContext, useEffect } from "react";

import Sidebar from "../../components/atomos/SideBarAtom";

import teste from "../../assets/imageBlog1.png";

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
import { BigCommentAboutUsOrganism } from "../../components/organismos/BigCommentAboutUsOrganism";
import { StatisticsAboutUsOrganism } from "../../components/organismos/StatisticsAboutUsOrganism";

export function AboutUs() {
  const { showMenu, setShowMenu } = useContext(MyContext) as IMyContext;

  return (
    <>
      {!showMenu && (
        <div>
          <HeaderAbout />

          <NewWayTravelAboutUsOrganism />

          <PlanningAboutUsOrganism />

          <BenefitsAboutUsOrganism />

          <BigCommentAboutUsOrganism />

          <StatisticsAboutUsOrganism className="flex sm:flex-row flex-col justify-around bg-gray w-full h-full sm:h-48 sm:mt-24" />

          <BlogOrganism
            className={"flex items-start h-full sm:mt-24 mb-4 flex-col"}
          />
        </div>
      )}

      {showMenu && (
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          className="h-96"
        />
      )}
    </>
  );
}
