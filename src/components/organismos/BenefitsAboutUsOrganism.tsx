import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import { ImageAtom } from "../atomos/ImageAtome";
import { SlideShowBenefitsAboutUsAtom } from "../atomos/SlideShowBenefitsAboutUsAtom";

import Missao from "../../assets/Missao.png";
import Visao from "../../assets/Visao.png";
import Valores from "../../assets/Valores.png";

export function BenefitsAboutUsOrganism() {
  return (
    <>
      <div className="hidden sm:flex mb-[200px] items-start justify-evenly">
        <ImageAtom className="mt-0 w-[350px]" source={Missao} alt="plans" />
        <ImageAtom className="mt-6 w-[350px]" source={Visao} alt="plans" />
        <ImageAtom className="mt-6 w-[350px]" source={Valores} alt="plans" />
      </div>
      <SlideShowBenefitsAboutUsAtom className="sm:hidden" />
    </>
  );
}
