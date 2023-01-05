import React from "react";

import bgImageHome from '../../assets/homeBgImage.png';

import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

import { NavBarMolecule } from "../moleculas/NavBarMolecule";
import { WelcomeMolecule } from "../moleculas/WelcomeMolecule";

export function WelcomeOrganism() {
  return (
      <BackgroundImageAtom
        image={bgImageHome}
        className='h-128 max-w-7xl'
      >
        
        <NavBarMolecule />
        
        <WelcomeMolecule />
      
      </BackgroundImageAtom>
  )
}