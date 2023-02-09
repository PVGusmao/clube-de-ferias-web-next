import { benefits } from "../../constants/AboutUs";
import { BenefitsAboutUsMolecule } from "../moleculas/BenefitsAboutUsMolecule";

export function BenefitsAboutUsOrganism() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:my-24">
        {benefits.map((element) => (
          <BenefitsAboutUsMolecule
            element={element}
            className="flex flex-col items-center w-64 my-4"
          />
        ))}
      </div>

      {/* <SlideShowBenefitsAboutUsAtom className="flex sm:hidden" /> */}
    </>
  );
}
