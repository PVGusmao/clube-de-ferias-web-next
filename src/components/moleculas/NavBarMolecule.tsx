import { useContext } from "react";

import logo from '../../assets/logo.png';

import { TextButtonMolecule } from "./TextButtonMolecule";

import { navLinks, socialMedia } from "../../constants";
import { IconButtonMolecule } from "./IconButtonMolecule";

import { MenuHamburguerMolecule } from "./MenuHamburguerMolecule";
import { MyContext } from "../../context/MyContext";

export function NavBarMolecule() {

  const {showMenu, setShowMenu} = useContext(MyContext);

  return (
    <div
      className="flex items-center w-full justify-evenly sm:justify-evenly h-32"
    >
      <a href="http://localhost:5173">
        <img
          className="w-36"
          src={logo}
          alt="logo"
        />
      </a>

      <div
        className="sm:flex hidden w-auto"
      >
        {
          navLinks.map((element, index) => (
            <TextButtonMolecule
              textClassName='sm:block font-semibold hidden text-white'
              className='p-2 cursor-pointer text-white hover:text-black'
              key={index}
              text={element.title}
              href="www.facebook.com"
              target="_blank"
            />
          ))
        }
      </div>

      <div className='sm:hidden'>
        <MenuHamburguerMolecule
          children
          onClick={() => {setShowMenu(!showMenu)}}
          color='white'
        />
      </div>

      <div
        className="hidden sm:flex"
      >
        {
          socialMedia.map((element, index) => (
            <IconButtonMolecule
              key={index}
              href="www.tiktok.com"
              target="_blank"
              classNameIcon="m-2 sm:block hidden"
              color="white"
              size={24}
              icon={element.icon}
            />
          ))
        }

      </div>

    </div>
  )
}