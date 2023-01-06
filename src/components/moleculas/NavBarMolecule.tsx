import React from "react";

import logo from '../../assets/logo.png';

import { TextButtonMolecule } from "./TextButtonMolecule";

import { navLinks, socialMedia } from "../../constants";
import { IconButtonMolecule } from "./IconButtonMolecule";

export function NavBarMolecule() {
  return (
    <div
      className="flex items-center w-full justify-evenly h-32"
    >
      <a href="http://localhost:5173">
        <img
          className="w-36"
          src={logo}
          alt="logo"
        />
      </a>

      <div
        className="flex w-auto"
      >
        {
          navLinks.map((element, index) => (
            <TextButtonMolecule
              textClassName='font-semibold text-white'
              className='p-2 cursor-pointer text-white hover:text-black'
              key={index}
              text={element.title}
              href="www.facebook.com"
              target="_blank"
            />
          ))
        }

      </div>

      <div
        className="flex"
      >
        {
          socialMedia.map((element, index) => (
            <IconButtonMolecule
              key={index}
              href="www.tiktok.com"
              target="_blank"
              classNameIcon="m-2"
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