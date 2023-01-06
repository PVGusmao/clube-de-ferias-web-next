import React from "react";
import { IconAtom } from "../atomos/IconAtom";

import { DiApple } from "react-icons/di";
import { TextAtom } from "../atomos/TextAtom";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";
import { Input } from "@material-tailwind/react";

import { navigation, socialMedia } from "../../constants";

export function FooterOrganism() {
  return (
    <div className="sm:h-[26.313rem] sm:w-[90rem] w-full bg-[red] sm:flex sm:flex-row flex-col px-12 sm:justify-between py-12	 sm:items-center">
      <div className="justify-items-start grid content-center sm:w-96 h-full mb-12	">
        <IconAtom icon={DiApple} size={30} color="black" className="mb-6" />
        <TextAtom
          className="font-bold text-white text-2xl mb-4	"
          text="INFORMAÇÕES"
        />
        <TextAtom
          className="text-left mb-7 text-base font-normal	text-white	"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <div className="flex flex-row">
          {socialMedia.map((element, index) => (
            <IconAtom
              icon={element.icon}
              size={30}
              color="white"
              className="ml-2"
            />
          ))}
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:w-[42rem] content-center h-full ">
        <div className="grid content-center justify-items-start sm:mb-0 mb-12	">
          <TextAtom
            className="font-bold text-white text-2xl mb-3.5"
            text="NAVIGATION"
          />
          {navigation.map((element, index) => (
            <div className="flex flex-row mb-4">
              <IconAtom
                icon={element.icon}
                size={20}
                color="white"
                className=" mr-3.5	"
              />
              <TextAtom text={element.content} className="text-white" />
            </div>
          ))}
        </div>
        <div className="grid content-center justify-items-start sm:w-80	">
          <TextAtom
            className="font-bold text-white text-2xl mb-8	"
            text="CONTATO"
          />
          <div className="flex flex-row mb-4">
            <IconAtom
              icon={DiApple}
              size={20}
              color="white"
              className=" mr-3.5	"
            />
            <TextAtom text="Lumbung Hidup East Java" className="text-white" />
          </div>
          <div className="flex flex-row mb-4">
            <IconAtom
              icon={DiApple}
              size={20}
              color="white"
              className="mr-3.5	"
            />
            <TextAtom text="Lumbung Hidup East Java" className="text-white" />
          </div>
          <ButtonMolecule
            className="w-48 bg-white rounded-none font-semibold	text-[#636363]"
            title="SUBSCRIBE"
          />
        </div>
      </div>
    </div>
  );
}
