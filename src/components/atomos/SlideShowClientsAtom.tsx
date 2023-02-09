import React from "react";
import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { clientes } from "../../constants";

import CardCommentsMolecule from "../moleculas/CardCommentsMolecule";

type Props = {
  className?: string;
};

export const SlideShowClientsAtom = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <Slide arrows={false} transitionDuration={250}>
        {clientes.map((element, index) => (
          <div className="h-full flex items-center justify-center" key={index}>
            <CardCommentsMolecule
              content={element.content}
              name={element.name}
              ocupation={element.ocupation}
              img={element.img}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};
