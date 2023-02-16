import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { BenefitsAboutUsMolecule } from "../moleculas/BenefitsAboutUsMolecule";
import { SquaresInterface } from "../../constants/AboutUs";
import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";
import { BsMap } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoMedalOutline } from "react-icons/io5";

type Props = {
  className?: string;
};

export const SlideShowBenefitsAboutUsAtom = ({ className }: Props) => {
  const { aboutUsTexts } = useContext(MyContext) as IMyContext;

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
    <div className={`${className} mt-10`}>
      <Slide arrows={false} transitionDuration={250}>
        {benefits.map((element, index: number) => (
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
