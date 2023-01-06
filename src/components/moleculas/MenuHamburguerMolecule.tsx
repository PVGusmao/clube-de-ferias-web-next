import React from "react";
import { IconType } from "react-icons";

import { IconAtom } from "../atomos/IconAtom";

import { ButtonMolecule } from "./ButtonMolecule";

import { ButtonProps } from "@material-tailwind/react";

type Props = ButtonProps & {
  icon: IconType,
}

export function MenuHamburguerMolecule({ icon, ...rest }: Props) {
  return (
    <ButtonMolecule
      className="bg-inherit shadow-none border-none"
      title={
        <IconAtom
          icon={icon}
          color='white'
          size={32}
        />
      }
      {...rest}
    />
  )
}