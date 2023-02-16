import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import { ImageAtom } from "../atomos/ImageAtome";
import { SlideShowBenefitsAboutUsAtom } from "../atomos/SlideShowBenefitsAboutUsAtom";

import BenefitsAboutUs from "../../assets/Missao-Visao-Valores.png";

export function BenefitsAboutUsOrganism() {
  return (
    <>
      <div className="hidden sm:flex justify-center mb-[200px]">
        <ImageAtom className="mt-10" source={BenefitsAboutUs} alt="plans" />
      </div>
      <SlideShowBenefitsAboutUsAtom className="sm:hidden" />
    </>
  );
}
