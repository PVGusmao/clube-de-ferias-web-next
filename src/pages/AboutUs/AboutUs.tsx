import React, { useContext } from "react";
import Sidebar from "../../components/atomos/SideBarAtom";
import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { NewWayTravelAboutUsOrganism } from "../../components/organismos/NewWayTravelAboutUsOrganism";
import { PlanningAboutUsOrganism } from "../../components/organismos/PlanningAboutUsOrganism";
import { IMyContext, MyContext } from "../../context/MyContext";

export function AboutUs() {

  const {showMenu, setShowMenu} = useContext(MyContext) as IMyContext;

  return (
    <>
      {
        !showMenu &&
        <div>
          <HeaderAbout />

          <NewWayTravelAboutUsOrganism />

          <PlanningAboutUsOrganism />
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