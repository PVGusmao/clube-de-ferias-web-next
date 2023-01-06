import React, { useState } from "react";

import bgImageHome from '../../assets/homeBgImage.png';

import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";
import Sidebar from "../atomos/SideBarAtom";

import { NavBarMolecule } from "../moleculas/NavBarMolecule";
import { WelcomeMolecule } from "../moleculas/WelcomeMolecule";

export function WelcomeOrganism() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <BackgroundImageAtom
        image={bgImageHome}
        className={`h-128 sm:max-w-7xl ${showMenu && 'hidden'}`}
      >
        
        <NavBarMolecule showMenu={showMenu} setShowMenu={setShowMenu} />

        <WelcomeMolecule className="w-full" />
      
      </BackgroundImageAtom>

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