import React from "react";

import logo from '../../assets/logo.png';

import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

export function NavBarMolecule() {
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
        className="flex bg-red-400 w-auto"
      >
        <a
          className="p-2"
        >
          <TextAtom
            children text="Quem somos"
          />
        </a>

        <a
          className="p-2"
        >
          <TextAtom
            children
            text="Planos"
          />
        </a>

        <a
          className="p-2"
        >
          <TextAtom
            children
            text="Simule sua viagem" 
          />
        </a>
          
        <a
          className="p-2"
        >
          <TextAtom
            children 
            text="blog"
          />
        </a>  

        <a
          className="p-2"
        >
          <TextAtom
            children
            text="Fale Conosco"
          />
        </a>

        <a
          className="p-2"
        >
          <TextAtom
            children
            text="Baixe o app"
          />
        </a>

      </div>

      <div
        className="flex bg-red-400 w-full"
      >
        <IconAtom
          icon={FaTiktok}
          color="white"
          size={24}
        />

        <IconAtom
          icon={FaInstagram}
          color="white"
          size={24}
        />

        <IconAtom
          icon={FaFacebook}
          color="white"
          size={24}
        />
      </div>

    </div>
  )
}