import React from "react";

import logo from '../../assets/logo.png';

import { TextButtonMolecule } from "../moleculas/TextButtonMolecule";

import { navLinks, socialMedia } from "../../constants";
import { IconButtonMolecule } from "../moleculas/IconButtonMolecule";

export function NavBarOrganism() {
  return (
    <div
      className="bg-gray flex items-center w-full justify-evenly"
    >
      <img
        className="w-36"
        src={logo}
        alt="logo"
      />

      <div
        className="flex w-auto"
      >
        {
          navLinks.map((element, index) => (
            <TextButtonMolecule
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