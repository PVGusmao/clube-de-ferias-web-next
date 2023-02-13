import React from "react";
import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { cards } from "../../constants";

import { CardMolecule } from "../moleculas/CardMolecule";

type Props = {
  className?: string;
};

export const SlideShowWelcomeAtom = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <Slide arrows={false} transitionDuration={250}>
        {cards.map((element, index) => (
          <div
            className="h-[230px] flex items-center justify-center"
            key={index}
          >
            <CardMolecule
              color="red"
              className="flex justify-center flex-col h-52 rounded-2xl bg-white sm:hidden shadow-lg sm:flex w-72"
              key={index}
              icon={element.icon}
              text={element.content}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};
