import { IoAirplaneSharp } from "react-icons/io5";

import { TextAtom } from "../atomos/TextAtom";
import { IconAtom } from "../atomos/IconAtom";
import { ImageAtom } from "../atomos/ImageAtome";
import { midSection } from "../../constants/AboutUs";

import Aviao from "../../../src/assets/quem-somos-aviao.png";

import HowItWorkPlansImage from "../../assets/plansAboutUs.png";
import HowItWorkImage from "../../assets/aboutusComoFuncionaImage.png";

export function HowItWorksAboutUsOrganism() {
  return (
    <div className="bg-[#E00718] w-full sm:h-[930px] h-[900px] relative">
      <img src={Aviao} className="ml-[100px] hidden sm:flex" />

      <ImageAtom
        source={HowItWorkImage}
        alt="fotos telefone ilustrativa"
        className="hidden sm:block absolute right-[77px] top-[136px]"
      />

      <div className="flex items-start flex-col sm:mx-[175px] mx-5 sm:pt-[40px] pt-[80px] sm:mt-0 mt-[50px]">
        <TextAtom
          children
          className="sm:text-[50px] text-[30px] text-white my-[10px] font-bold leading-[120%]"
          text={midSection.big_title}
        />

        <TextAtom
          children
          className="text-[25px] text-white font-medium leading-[120%] mt-[11px]"
          text={midSection.subtitle}
        />

        <TextAtom
          children
          className="text-[20px] text-white font-medium leading-[180%] mt-[23px]"
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

        <ImageAtom className="mt-10" source={HowItWorkPlansImage} alt="plans" />

        <div className="mt-[11px] flex items-start w-full sm:w-[479px]">
          <TextAtom
            children
            className="text-[12px] sm:text-[18px] text-white font-medium mr-[10px] leading-[159%]"
            text="+ Praticidade"
          />

          <TextAtom
            children
            className="text-[12px] sm:text-[18px] ml-[20px] sm:ml-0 text-white mr-[10px] font-medium leading-[159%]"
            text="+ Planejamento"
          />

          <TextAtom
            children
            className="text-[12px] sm:text-[18px] ml-[20px] sm:ml-0 text-white mr-[10px] font-medium leading-[159%]"
            text="+ Descontos Exclusivos"
          />
        </div>

        <TextAtom
          children
          className="text-[30px] mt-[20px] text-white font-medium leading-[120%]"
          text={midSection.last_text}
        />
      </div>
      <img src={Aviao} className="rotate-180 ml-[100px] hidden sm:flex" />
    </div>
  );
}
