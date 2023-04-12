import React from "react";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text: string;
  className: string;
  color: string;
};

export function CardMolecule({
  icon,
  text,
  className,
  color = "black",
}: Props) {
  return (
    <div className={`${className}`}>
      <IconAtom
        className="w-full justify-center mb-4"
        icon={icon}
        size={50}
        color={color}
      />
      <TextAtom
        children
        className="text-black text-lg text-center justify-center mx-3.5"
        text={text}
      />
    </div>
  );
}
