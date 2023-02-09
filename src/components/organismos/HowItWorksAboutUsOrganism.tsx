import { TextAtom } from "../atomos/TextAtom";
import { TablePlansAboutUsMolecule } from "../moleculas/TablePlansAboutUsMolecule";

import image from "../../assets/aboutusComoFuncionaImage.png";
import { ImageAtom } from "../atomos/ImageAtome";
import { IconAtom } from "../atomos/IconAtom";
import { IoAirplaneSharp } from "react-icons/io5";
import { midSection } from "../../constants/AboutUs";

export function HowItWorksAboutUsOrganism() {
  return (
    <div className="bg-[#E00718] w-full h-[900px] relative">
      <div className="hidden sm:flex h-[33px] w-[752px] m-auto border-b-2 border-b-white border-r-2 border-r-white rounded-br-2xl" />

      <IconAtom
        className="hidden sm:block absolute rotate-180 left-[210px] top-[10px]"
        icon={IoAirplaneSharp}
        size={42}
        color="white"
      />

      <ImageAtom
        source={image}
        alt="fotos telefone ilustrativa"
        className="hidden sm:block absolute right-[77px] top-[136px]"
      />

      <div className="flex items-start flex-col sm:mx-[175px] mx-5 mt-[50px]">
        <TextAtom
          children
          className="text-[50px] text-white font-bold leading-[120%]"
          text={midSection.big_title}
        />

        <TextAtom
          children
          className="text-[25px] text-white font-medium leading-[120%] mt-[11px]"
          text={midSection.subtitle}
        />

        <TextAtom
          children
          className="text-[20px] text-white font-medium leading-[180%] mt-[33px]"
          text={midSection.steps[0].text}
        />

        <TextAtom
          children
          className="text-[20px] text-white font-medium leading-[180%]"
          text={midSection.steps[1].text}
        />

        <TextAtom
          children
          className="text-[20px] text-white font-medium leading-[180%]"
          text={midSection.steps[2].text}
        />

        <TextAtom
          children
          className="text-[30px] text-white font-bold leading-[120%] mt-[53px]"
          text={midSection.mid_title}
        />

        <TextAtom
          children
          className="text-[18px] text-white font-medium leading-[180%] mt-[7px]"
          text={midSection.mid_subtitle1}
        />
        <TextAtom
          children
          className="text-[18px] text-white text-start font-medium leading-[180%]"
          text={midSection.mid_subtitle2}
        />

        <TablePlansAboutUsMolecule midSection={midSection} />

        <div className="mt-[11px] flex items-start w-full sm:w-[479px]">
          <TextAtom
            children
            className="text-[12px] sm:text-[18px] text-white font-medium leading-[159%]"
            text="+ Praticidade"
          />

          <TextAtom
            children
            className="text-[12px] sm:text-[18px] ml-[20px] sm:ml-0 text-white font-medium leading-[159%]"
            text="+ Planejamento"
          />

          <TextAtom
            children
            className="text-[12px] sm:text-[18px] ml-[20px] sm:ml-0 text-white font-medium leading-[159%]"
            text="+ Descontos Exclusivos"
          />
        </div>

        <TextAtom
          children
          className="text-[30px] mt-[38px] text-white font-medium leading-[120%]"
          text={midSection.last_text}
        />
      </div>
    </div>
  );
}
