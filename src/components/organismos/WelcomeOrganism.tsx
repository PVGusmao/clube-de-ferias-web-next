import { home } from '../../constants';

import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

import { NavBarMolecule } from "../moleculas/NavBarMolecule";
import { WelcomeMolecule } from "../moleculas/WelcomeMolecule";

import logo from '../../assets/logo.png';

import { navLinks, socialMedia } from "../../constants";

export function WelcomeOrganism() {

  return (
    <>
      <BackgroundImageAtom
        image={home.image}
        className={`h-128 sm:max-w-7xl`}
      >
        
        {/* <NavBarMolecule
          className='flex items-center w-full justify-between px-8 sm:px-0 sm:justify-evenly h-20'
          pageId='home'
          textLinkProps={{
            textClassName: 'sm:block font-semibold hidden text-white',
            className: 'w-32 cursor-pointer text-white hover:text-black',
          }}
          logoProps={{
            logo: logo,
            className: 'w-32',
          }}
          navLinks={navLinks}
          socialMediaProps={{
            socialMedia: socialMedia,
            color: 'white',
            size: 24,
          }}
          burgerMenuProps={{
            color: 'white'
          }}
        /> */}

        <WelcomeMolecule className="w-full" />
      
      </BackgroundImageAtom>
    </>
  )
}