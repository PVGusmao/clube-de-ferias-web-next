import { useContext } from "react";

import marcaDagua from "../../public/s-logo-marda-dagua.png";

import { TextAtom } from "../atomos/TextAtom";
import { ImageAtom } from "../atomos/ImageAtom";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

import { IMyContext, MyContext } from "../../context/MyContext";
import Image from "next/image";

export function HeaderAbout() {
  const { aboutUsTexts } = useContext(MyContext) as IMyContext;

  return (
    <>
      <BackgroundImageAtom
        className="flex pl-10 flex-col sm:flex-row justify-center sm:justify-start bg-auto sm:h-[500px] h-[500px] rounded-b-[40px] sm:rounded-b-[80px] sm:items-center"
        image={aboutUsTexts?.header?.image}
      >
        <div className="flex flex-col items-start sm:items-start sm:ml-48 w-[250px] sm:w-[350px]">
          <TextAtom
            children
            className="text-white text-start font-medium text-3xl font-ubuntu mt-6"
            text={aboutUsTexts?.header?.subtitle}
          />

          <TextAtom
            children
            className="text-white text-start font-medium text-xl font-ubuntu mt-2"
            text={aboutUsTexts?.header?.content}
          />
        </div>

        <Image
          className="absolute sm:relative w-48 sm:w-auto top-80 sm:top-0 left-24 sm:left-0"
          src={marcaDagua}
          alt="Logo stella barros"
        />
      </BackgroundImageAtom>
    </>
  );
}
