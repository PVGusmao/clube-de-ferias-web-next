import { ImageAtom } from "../atomos/ImageAtome";

import { SlideShowBenefitsAboutUsAtom } from "../atomos/SlideShowBenefitsAboutUsAtom";

import BenefitsAboutUs from "../../assets/Missao-Visao-Valores.png";

export function BenefitsAboutUsOrganism() {
  return (
    <>
      <div className="hidden sm:flex justify-center mb-[200px]">
        <ImageAtom className="mt-10" source={BenefitsAboutUs} alt="plans" />
        {/* <div className="flex flex-col sm:flex-row items-center justify-center sm:my-24">
          {benefits.map((element) => (
            <BenefitsAboutUsMolecule
              element={element}
              className="flex flex-col items-center w-64"
            />
          ))}
        </div> */}
      </div>
      <SlideShowBenefitsAboutUsAtom className="sm:hidden" />
    </>
  );
}
