import React from "react";
import CardCommentsMolecule from "../moleculas/CardCommentsMolecule";

import { clientes } from "../../constants";

export function ClientsOrganism() {
  return (
    <div className="pt-40 pb-60 px-2">
      <h1 className="text-5xl mb-16	text-center">Nossos Clientes recomendam!</h1>
      <div className="flex justify-center flex-row justify-evenly flex-wrap">
        {clientes.map((element, index) => (
          <CardCommentsMolecule
            content={element.content}
            name={element.name}
            ocupation={element.ocupation}
            img={element.img}
          />
        ))}
      </div>
    </div>
  );
}
