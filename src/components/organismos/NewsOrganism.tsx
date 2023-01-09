import React from "react";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";
import { TextAtom } from "../atomos/TextAtom";
import { Checkbox, Input } from "@mui/material";

import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { IconAtom } from "../atomos/IconAtom";

export function NewsOrganism() {
  return (
    <div className="sm:flex h-[25.5rem] sm:h-[35.5rem] w-full justify-evenly bg-[#F3F3F3]">
      <div className="grid content-center">
        <TextAtom
          className="text-5xl	font-bold text-[#F20F0F] text-left"
          text="Quer saber mais sobre"
        />
        <TextAtom
          className="text-5xl	font-bold text-[#F20F0F] text-left mb-5"
          text="o clube de ferias?"
        />
        <TextAtom
          className="font-light	text-left text-2xl"
          text="Assine nossa news e receba novidades toda semana"
        />
        <TextAtom
          className="font-light	text-left text-2xl"
          text="novidades toda semana"
        />

        <div className="flex mt-10">
          <div className="flex h-[3.4375rem] w-[10.75rem] mb-5 bg-[#252525] items-center justify-center rounded-lg mr-5">
            <IconAtom
              icon={AiFillApple}
              size={30}
              color="white"
              className="mb-2"
            />
            <TextAtom className="text-white ml-2 font-bold" text="App Store" />
          </div>
          <div className="flex h-[3.4375rem] w-[10.75rem] mb-5 bg-[#252525] items-center justify-center rounded-lg">
            <IconAtom
              icon={FaGooglePlay}
              size={30}
              color="white"
              className="mb-2"
            />
            <TextAtom className="text-white ml-2 font-bold" text="App Store" />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center">
        <Input
          placeholder="Nome"
          className="bg-[#D9D9D98A] w-[29.375rem] rounded-full p-3 mb-4"
          disableUnderline
        />
        <Input
          placeholder="Email"
          className="bg-[#D9D9D98A] w-[29.375rem] rounded-full p-3"
          disableUnderline
        />

        <div>
          <div className="flex items-center">
            <Checkbox />
            <TextAtom text="Eu concordo em receber comunicação" />
          </div>
          <TextAtom
            className="font-light	"
            text="Ao informar meus dados, estou ciente"
          />
          <TextAtom
            className="font-light	"
            text="das diretrizes da Política de Privacidade"
          />

          <ButtonMolecule
            className="w-[13.375rem] h-[3.5rem] rounded-full bg-[#636363] mt-5"
            textClassName="text-white"
            title={"Enviar"}
          />
        </div>
      </div>
    </div>
  );
}
