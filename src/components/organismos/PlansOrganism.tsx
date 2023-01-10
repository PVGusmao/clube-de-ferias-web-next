import React, { useState } from "react";
import {
  CardPlanosMolecule,
  PropsPlanos,
} from "../../components/moleculas/CardPlanosMolecule";
import { TextAtom } from "../atomos/TextAtom";

import { planos } from "../../constants";
import { SlideShowPlansAtom } from "../atomos/SlideShowPlanosAtom";

export function PlansOrganism({}: PropsPlanos) {

  const [slidePlans, setSlidePlans] = useState(0); 

  return (
    <div className="bg-[#F20F0F] justify-center sm:p-24">
      <TextAtom
        children
        className="text-center sm:text-5xl text-3xl sm:pt-0 pt-4 text-white font-bold"
        text="Assine agora um dos nossos"
      />
      <div className="sm:flex hidden flex-row flex-wrap justify-evenly">
        {
          planos.map((element, index: number) => (
            <CardPlanosMolecule
              key={index}
              plano={element.plano}
              desconto={element.desconto}
              content1={element.content1}
              content2={element.content2}
              valor={element.valor}
              btnColor={element.btnColor}
            />
          ))
        }
      </div>

      <SlideShowPlansAtom className="w-full sm:hidden" />
    </div>
  );
}
