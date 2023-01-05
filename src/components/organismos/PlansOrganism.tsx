import React from "react";
import {
  CardPlanosMolecule,
  PropsPlanos,
} from "../../components/moleculas/CardPlanosMolecule";
import { TextAtom } from "../atomos/TextAtom";

import { planos } from "../../constants";

export default function PlansOrganism({}: PropsPlanos) {
  return (
    <div className="bg-[#F20F0F] justify-center p-24">
      <TextAtom
        className="text-center text-5xl text-white font-bold"
        text="Assine agora um dos nossos"
      />
      <div className="flex flex-row flex-wrap justify-evenly">
        {planos.map((element, index) => (
          <CardPlanosMolecule
            plano={element.plano}
            desconto={element.desconto}
            content1={element.content1}
            content2={element.content2}
            valor={element.valor}
            btnColor={element.btnColor}
          />
        ))}
      </div>
    </div>
  );
}
