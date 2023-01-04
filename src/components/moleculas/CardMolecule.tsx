import React from "react";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text: string;
};

export default function CardMolecule({ icon, text }: Props) {
  return (
    <div
      className={`flex justify-center flex-col h-52 w-52 rounded-2xl bg-white shadow-lg`}
    >
      <IconAtom
        className=" w-full justify-center mb-4"
        icon={icon}
        size={45}
        color="black"
      />
      <TextAtom
        className="text-18px text-center justify-center mx-3.5 "
        text={text}
      />
    </div>
  );
}
