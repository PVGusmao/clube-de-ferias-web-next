import React, { useState } from "react";

import bgImageHome from '../../assets/homeBgImage.png';

import { NavBarOrganism } from "../../components/organismos/NavBarOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";
import { BackgroundImageAtom } from "../../components/atomos/BackgroundImageAtom";

export default function Home() {
  return (
    <>

      <BackgroundImageAtom
        image={bgImageHome}
        className='h-128 max-w-7xl'
      >
        
        <NavBarOrganism />
        
        <WelcomeOrganism />
      
      </BackgroundImageAtom>

    </>
  );
}
