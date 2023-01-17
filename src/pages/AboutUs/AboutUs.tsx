import { useContext } from "react";

import Sidebar from "../../components/atomos/SideBarAtom";

import { IMyContext, MyContext } from "../../context/MyContext";

import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { PlanningAboutUsOrganism } from "../../components/organismos/PlanningAboutUsOrganism";
import { NewWayTravelAboutUsOrganism } from "../../components/organismos/NewWayTravelAboutUsOrganism";
import { BenefitsAboutUsOrganism } from "../../components/organismos/BenefitsAboutUsOrganism";

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

          <BenefitsAboutUsOrganism />
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