import { useContext } from "react";

import logo from '../../assets/logo.png';

import { TextButtonMolecule } from "./TextButtonMolecule";

import { navLinks, socialMedia } from "../../constants";
import { IconButtonMolecule } from "./IconButtonMolecule";

import { MenuHamburguerMolecule } from "./MenuHamburguerMolecule";
import { IMyContext, MyContext } from "../../context/MyContext";

export function NavBarMolecule() {

  const {showMenu, setShowMenu} = useContext(MyContext) as IMyContext;

  return (
    <div
      id="home"
      className="flex items-center w-full justify-between px-8 sm:px-0 sm:justify-evenly h-40"
    >
      <a href="." >
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
          navLinks.map((element, index: number) => (
            <TextButtonMolecule
              textClassName='sm:block font-semibold hidden text-white'
              className='p-2 cursor-pointer text-white hover:text-black'
              key={index}
              text={element.title}
              to={element.rota}
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
          socialMedia.map((element, index: number) => (
            <IconButtonMolecule
              target="_blank"
              key={index}
              to={element.rota}
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