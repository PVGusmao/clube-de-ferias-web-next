import React from "react";

import { AiOutlineClose } from 'react-icons/ai';

import { IconAtom } from "../atomos/IconAtom";

import { ButtonMolecule } from "./ButtonMolecule";

import { ButtonProps } from "@material-tailwind/react";

type Props = ButtonProps & {
  color?: string,
}

export function CloseButtonMolecule({ color, ...rest }: Props) {
  return (
    <ButtonMolecule
      className="bg-inherit shadow-none border-none bg-none text-inherit border-none"
      title={
        <IconAtom
          icon={AiOutlineClose}
          color={color}
          size={32}
        />
      }
      {...rest}
    />
  )
}