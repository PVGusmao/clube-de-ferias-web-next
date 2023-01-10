import React from "react";
import CardCommentsMolecule from "../moleculas/CardCommentsMolecule";

import { clientes } from "../../constants";
import { SlideShowClientsAtom } from "../atomos/SlideShowClientsAtom";

export function ClientsOrganism() {
  return (
    <div className="py-10 px-2">
      <h1 className="text-black text-5xl mb-1 text-center">Nossos Clientes recomendam!</h1>
      <div className="hidden sm:flex justify-center flex-row justify-evenly flex-wrap">
        {
          clientes.map((element, index: number) => (
            <CardCommentsMolecule
              key={index}
              content={element.content}
              name={element.name}
              ocupation={element.ocupation}
              img={element.img}
            />
          ))
        }
      </div>

      <SlideShowClientsAtom className="sm:hidden w-full" />
    </div>
  );
}
