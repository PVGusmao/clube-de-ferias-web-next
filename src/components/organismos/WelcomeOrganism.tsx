import { home } from '../../constants';

import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

import { NavBarMolecule } from "../moleculas/NavBarMolecule";
import { WelcomeMolecule } from "../moleculas/WelcomeMolecule";

export function WelcomeOrganism() {

  return (
    <>
      <BackgroundImageAtom
        image={home.image}
        className={`h-128 sm:max-w-7xl`}
      >
        
        <NavBarMolecule />

        <WelcomeMolecule className="w-full" />
      
      </BackgroundImageAtom>
    </>
  )
}