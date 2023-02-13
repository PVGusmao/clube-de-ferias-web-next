import headerImage from "../../assets/headerImageAboutUs.png";
import marcaDagua from "../../assets/s-logo-marda-dagua.png";

import { headerTexts } from "../../constants/AboutUs";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

import { TextAtom } from "../atomos/TextAtom";
import { ImageAtom } from "../atomos/ImageAtome";

type Props = {};

export function HeaderAbout() {
  return (
    <>
      <BackgroundImageAtom
        className="flex pl-10 flex-col sm:flex-row justify-center sm:justify-start bg-auto sm:h-[500px] h-[500px] rounded-b-[40px] sm:rounded-b-[80px] sm:items-center"
        image={headerTexts.image}
      >
        <div className="flex flex-col items-start sm:items-start sm:ml-48 w-[250px] sm:w-[350px]">
          <TextAtom
            children
            className="text-white text-start font-medium text-3xl font-ubuntu mt-6"
            text={headerTexts.subtitle}
          />

          <TextAtom
            children
            className="text-white text-start font-medium text-xl font-ubuntu mt-6"
            text={headerTexts.content}
          />
        </div>

        <ImageAtom
          className="absolute sm:relative w-48 sm:w-auto top-80 sm:top-0 left-24 sm:left-0"
          source={marcaDagua}
          alt="Logo stella barros"
        />
      </BackgroundImageAtom>
    </>
  );
}
