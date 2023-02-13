import React from "react";
import CardCommentsMolecule from "../moleculas/CardCommentsMolecule";

import { clientes } from "../../constants";
import { SlideShowClientsAtom } from "../atomos/SlideShowClientsAtom";
import { Slide } from "react-slideshow-image";

export function ClientsOrganism() {
  return (
    <div className="py-[120px] px-2">
      <h1 className="text-black text-5xl mb-1 text-center">
        Nossos Clientes recomendam!
      </h1>
      <Slide arrows={false} slidesToShow={3} transitionDuration={10}>
        {clientes.map((element, index: number) => (
          <div className="hidden sm:flex justify-center flex-row justify-evenly">
            <CardCommentsMolecule
              key={index}
              content={element.content}
              name={element.name}
              ocupation={element.ocupation}
              img={element.img}
            />
          </div>
        ))}
      </Slide>

      <SlideShowClientsAtom className="sm:hidden w-full" />
    </div>
  );
}
