import React, { useState } from "react";
import {
  CardPlanosMolecule,
  PropsPlanos,
} from "../../components/moleculas/CardPlanosMolecule";
import { TextAtom } from "../atomos/TextAtom";

import { planos } from "../../constants";
import { SlideShowCardMolecule } from "../moleculas/SlideShowCardMolecule";

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

      <SlideShowCardMolecule
        className="flex sm:hidden items-center px-5"
        setSlideShow={setSlidePlans}
        slideShow={slidePlans}
      > 
        <CardPlanosMolecule
          className="mx-3"
          plano={planos[slidePlans].plano}
          desconto={planos[slidePlans].desconto}
          content1={planos[slidePlans].content1}
          content2={planos[slidePlans].content2}
          valor={planos[slidePlans].valor}
          btnColor={planos[slidePlans].btnColor}
        />
      </SlideShowCardMolecule>
    </div>
  );
}
