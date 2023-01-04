import React from "react";
import { TextAtom } from "../atomos/TextAtom";

import { ButtonAtom } from "../atomos/ButtonAtom";

type Planos = {
  plano: string;
  desconto: string;
  content1: string;
  content2: string;
  valor: string;
};

export default function CardPlanosMolecule({
  plano,
  desconto,
  content1,
  content2,
  valor,
}: Planos) {
  return (
    <div
      className={`flex justify-center flex-col h-[32.8125rem] w-72 space-y-9 rounded-2xl bg-white shadow-lg`}
    >
      <TextAtom
        children
        className="text-lg text-center font-bold justify-center mx-3.5 "
        text={"SILVER"}
      />
      <TextAtom
        children
        className="text-3xl text-center justify-center mx-3.5 "
        text={"6% OFF"}
      />
      <TextAtom
        children
        className="text-base text-center justify-center mx-3.5 "
        text={"em qualquer viagem do App!"}
      />
      <TextAtom
        children
        className="text-base text-center justify-center mx-3.5 "
        text={"Sua assinatura vira crédito para suas viagens"}
      />
      <TextAtom
        children
        className="text-2xl text-center justify-center font-bold mx-3.5 "
        text={"R$ 199/mês"}
      />
      <ButtonAtom
        children
        className="text-xs mx-14 bg-red-400 "
        title="Adquira seu Plano"
      />
    </div>
  );
}
