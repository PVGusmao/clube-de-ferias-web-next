import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import { ImageAtom } from "../atomos/ImageAtome";
import { SlideShowBenefitsAboutUsAtom } from "../atomos/SlideShowBenefitsAboutUsAtom";

import { BenefitsAboutUsMolecule } from "../moleculas/BenefitsAboutUsMolecule";

import { BsMap } from "react-icons/bs";
import { IoMedalOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

import BenefitsAboutUs from "../../assets/Missao-Visao-Valores.png";

export function BenefitsAboutUsOrganism() {
  const { aboutUsTexts } = useContext(MyContext) as IMyContext;

  console.log(aboutUsTexts.squares[0])

  const benefits = [
  {
    id: 1,
    icon: BsMap,
    title: aboutUsTexts.squares[0].title,
    bodyText: aboutUsTexts.squares[0].subtitle
  },
  {
    id: 2,
    icon: AiOutlineSafetyCertificate,
    title: aboutUsTexts.squares[1].title,
    bodyText: aboutUsTexts.squares[1].subtitle
  },
  {
    id: 3,
    icon: IoMedalOutline,
    title: aboutUsTexts.squares[2].title,
    bodyText: aboutUsTexts.squares[2].subtitle
  }
]
  return (
    <>
      <div className="hidden sm:flex justify-center mb-[200px]">
        <ImageAtom className="mt-10" source={BenefitsAboutUs} alt="plans" />
      </div>
      <SlideShowBenefitsAboutUsAtom className="sm:hidden" />
    </>
  );
}
