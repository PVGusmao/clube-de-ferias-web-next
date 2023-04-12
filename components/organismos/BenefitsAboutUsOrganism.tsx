import Image from "next/image";

import { SlideShowBenefitsAboutUsAtom } from "../atomos/SlideShowBenefitsAboutUsAtom";

import Visao from "../../public/Visao.png";
import Missao from "../../public/Missao.png";
import Valores from "../../public/Valores.png";

export function BenefitsAboutUsOrganism() {
  return (
    <>
      <div className="hidden sm:flex mb-[100px] items-start justify-evenly">
        <Image className="mt-0 w-[350px]" src={Missao} alt="plans" />
        <Image className="mt-6 w-[350px]" src={Visao} alt="plans" />
        <Image className="mt-6 w-[350px]" src={Valores} alt="plans" />
      </div>
      <SlideShowBenefitsAboutUsAtom className="sm:hidden" />
    </>
  );
}
