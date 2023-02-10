import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { BenefitsAboutUsMolecule } from "../moleculas/BenefitsAboutUsMolecule";
import { benefits } from "../../constants/AboutUs";

type Props = {
  className?: string;
};

export const SlideShowBenefitsAboutUsAtom = ({ className }: Props) => {
  return (
    <div className={`${className} mt-10`}>
      <Slide arrows={false} transitionDuration={250}>
        {benefits.map((element, index) => (
          <div className="h-30 flex items-center justify-center" key={index}>
            <BenefitsAboutUsMolecule
              element={element}
              className="flex flex-col items-center w-64"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};
