import React from "react";

import { IconType } from "react-icons";
import { GiHamburgerMenu } from 'react-icons/gi';


import { IconAtom } from "../atomos/IconAtom";

import { ButtonMolecule } from "./ButtonMolecule";

import { ButtonProps } from "@material-tailwind/react";

type Props = ButtonProps & {
  color?: string,
}

export function MenuHamburguerMolecule({ color, ...rest }: Props) {
  return (
    <ButtonMolecule
      className="bg-inherit shadow-none border-none bg-none text-inherit border-none"
      title={
        <IconAtom
          icon={GiHamburgerMenu}
          color={color}
          size={32}
        />
      }
      {...rest}
    />
  )
}