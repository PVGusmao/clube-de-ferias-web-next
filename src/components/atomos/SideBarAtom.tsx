import React, { Dispatch, SetStateAction } from "react";

import { IconAtom } from "./IconAtom";

import logo from "../../assets/logo.png";

import { FaBloggerB } from "react-icons/fa";
import { IoIosAirplane, IoIosCalculator } from "react-icons/io";
import { MdPeople, MdOutlinePhoneCallback } from "react-icons/md";

import { navLinks, socialMedia } from "../../constants";
import { IconButtonMolecule } from "../moleculas/IconButtonMolecule";
import { TextAtom } from "./TextAtom";

type Props = {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  showMenu: boolean;
};

export default function Sidebar({ setShowMenu, showMenu }: Props) {
  return (
    <div className="h-96">
      <div className="flex flex-col h-screen bg-white shadow w-full bg-[#F20F0F]">
        <div className="space-y-3 flex flex-col">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm my-[100px] h-[250px] flex flex-col justify-between items-center">
              <li className="rounded-sm">
                <a
                  href="/sobre"
                  className="flex items-center text-white p-2 space-x-3 rounded-md"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <span className="text-lg font-bold">Quem somos</span>
                </a>
              </li>

              <li className="rounded-sm">
                <a
                  href="#simulador"
                  className="flex items-center text-white p-2 space-x-3 rounded-md"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <span className="text-lg font-bold">Simule sua viagem</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="/blog"
                  className="flex items-center text-white p-2 space-x-3 rounded-md"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <span className="text-lg font-bold">Blog</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="/fale-conosco"
                  className="flex items-center text-white p-2 space-x-3 rounded-md"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <span className="text-lg font-bold">Fale Conosco</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <a
            href="#baixe-o-app"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <TextAtom
              text="Baixe o App"
              className="text-white font-bold text-xl border-2 p-2 rounded-xl mb-4"
            >
              Baixe o App
            </TextAtom>
          </a>
          <div className="flex">
            {socialMedia.map((element, index) => (
              <IconButtonMolecule
                key={index}
                to={element.rota}
                // target="_blank"
                classNameIcon="m-2 sm:block"
                color="white"
                size={20}
                icon={element.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
