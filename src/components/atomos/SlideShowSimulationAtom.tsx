import { useContext } from "react";
import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import CardSimulationMolecule from "../moleculas/CardSimulationMolecule";
import { IMyContext, MyContext } from "../../context/MyContext";

type Props = {
  className?: string;
};

export const SlideShowSimulationAtom = ({ className }: Props) => {
  const { packages } = useContext(MyContext) as IMyContext;

  return (
    <div className={`${className}`}>
      <Slide arrows={true} transitionDuration={100}>
        {packages.map((element, index) => (
          <div
            className="h-[500px] flex items-center justify-center"
            key={index}
          >
            <CardSimulationMolecule
              key={index}
              subname={element.subname}
              img={element.img}
              name={element.name}
              price={element.latest_information.total_amount_people}
              date={element.date.display}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};
