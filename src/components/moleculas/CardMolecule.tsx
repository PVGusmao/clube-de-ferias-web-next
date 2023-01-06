import React from "react";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text: string;
  className: string;
};

export function CardMolecule({ icon, text, className }: Props) {
  return (
    <div
      className={`flex justify-center flex-col h-52 rounded-2xl bg-white shadow-lg ${className}`}
    >
      <IconAtom
        className=" w-full justify-center mb-4"
        icon={icon}
        size={36}
        color="black"
      />
      <TextAtom
        children
        className="text-lg text-center justify-center mx-3.5"
        text={text}
      />
    </div>
  );
}
