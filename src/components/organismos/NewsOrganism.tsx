import React from "react";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";
import { TextAtom } from "../atomos/TextAtom";
import { Checkbox, Input } from "@mui/material";

import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { IconAtom } from "../atomos/IconAtom";

export function NewsOrganism() {
  return (
    <div id='baixe-o-app' className="sm:flex grid content-center h-[53.875rem] sm:h-[25.5rem] sm:h-[35.5rem] w-full justify-evenly bg-[#F3F3F3]">
      <div className="grid content-center">
        <TextAtom
          children
          className="sm:text-5xl text-3xl	font-bold text-[#F20F0F] sm:text-left"
          text="Quer saber mais sobre"
        />
        <TextAtom
          children
          className="sm:text-5xl text-3xl	font-bold text-[#F20F0F] sm:text-left mb-5"
          text="o clube de ferias?"
        />
        <TextAtom
          children
          className="font-light	sm:text-left sm:text-2xl text-black"
          text="Assine nossa news e receba novidades toda semana"
        />
        <TextAtom
          children
          className="font-light	sm:text-left sm:text-2xl text-black"
          text="novidades toda semana"
        />

        <div className="flex my-10">
            <a href="https://apps.apple.com/us/app/clube-de-f%C3%A9rias/id1627026529">
              <div className="flex h-[3.4375rem] w-[10.75rem] mb-5 bg-[#252525] items-center justify-center rounded-lg mr-5">
                <IconAtom
                  icon={AiFillApple}
                  size={30}
                  color="white"
                  className="mb-2"
                />
                <TextAtom children className="text-white ml-2 font-bold" text="App Store" />
              </div>
            </a>
          <a href="https://play.google.com/store/apps/details?id=com.stellabarros.clubedeferias">
            <div className="flex h-[3.4375rem] w-[11rem] mb-5 bg-[#252525] items-center justify-center rounded-lg">
              <IconAtom
                icon={FaGooglePlay}
                size={30}
                color="white"
                className=""
              />
              <TextAtom children className="text-white ml-2 font-bold" text="App Store" />
            </div>
          </a>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center ">
        <Input
          placeholder="Nome"
          className="bg-[#D9D9D98A] w-[19.875rem] sm:w-[29.375rem] rounded-full p-3 mb-4"
          disableUnderline
        />
        <Input
          placeholder="Email"
          className="bg-[#D9D9D98A] w-[19.875rem] sm:w-[29.375rem] rounded-full p-3"
          disableUnderline
        />

        <div className="mt-10">
          <div className="flex items-center">
            <Checkbox />
            <TextAtom children className="text-black" text="Eu concordo em receber comunicação" />
          </div>
          <TextAtom
            children
            className="font-light text-black"
            text="Ao informar meus dados, estou ciente"
          />
          <TextAtom
            children
            className="font-light text-black"
            text="das diretrizes da Política de Privacidade"
          />

          <ButtonMolecule
            children
            className="w-[13.375rem] h-[3.5rem] rounded-full bg-[#636363] mt-5 text-black"
            textClassName="text-white"
            title={"Enviar"}
          />
        </div>
      </div>
    </div>
  );
}
