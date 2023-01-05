import React from "react";
import { TextAtom } from "../atomos/TextAtom";

import { ButtonMolecule } from "./ButtonMolecule";

export type PropsPlanos = {
  plano?: string;
  desconto?: string;
  content1?: string;
  content2?: string;
  valor?: string;
  btnColor?: string;
  btnTitle?: string;
};

export function CardPlanosMolecule({
  plano,
  desconto,
  content1,
  content2,
  valor,
  btnTitle,
  btnColor,
}: PropsPlanos) {
  return (
    <div
      className={`flex justify-center flex-col h-[32.8125rem] w-72 space-y-9 rounded-2xl bg-white shadow-lg my-11`}
    >
      <div className={`flex rounded-lg self-center p-2.5 ${btnColor}`}>
        <TextAtom
          children
          className="text-lg h-full font-bold mx-3.5 text-white "
          text={plano}
        />
      </div>
      <TextAtom
        children
        className="text-3xl text-center justify-center mx-3.5 "
        text={desconto}
      />
      <TextAtom
        children
        className="text-base text-center justify-center mx-3.5 "
        text={content1}
      />
      <TextAtom
        children
        className="text-base text-center justify-center mx-3.5 "
        text={content2}
      />
      <TextAtom
        children
        className="text-2xl text-center justify-center font-bold mx-3.5 "
        text={valor}
      />
      <ButtonMolecule
        children
        className={`flex w-40 self-center p-2.5 justify-center items-center ${btnColor}`}
        textClassName="text-xs font-bold"
        title={"Adquira seu plano"}
      />
    </div>
  );
}
