import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { BenefitsAboutUsMolecule } from "../moleculas/BenefitsAboutUsMolecule";
import { SquaresInterface } from "../../constants/AboutUs";
import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

type Props = {
  className?: string;
};

export const SlideShowBenefitsAboutUsAtom = ({ className }: Props) => {
  const { aboutUsTexts } = useContext(MyContext) as IMyContext;

  return (
    <div className={`${className} mt-10`}>
      <Slide arrows={false} transitionDuration={250}>
        {aboutUsTexts.squares.map((element: SquaresInterface, index: number) => (
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
