import React, { ReactNode } from "react";

import { TextAtom } from '../atomos/TextAtom';

import { Button, ButtonProps, Typography } from "@material-tailwind/react";

type Props = ButtonProps & {
  title:string,
  children?: ReactNode,
  textClassName?: string;
};

export function ButtonMolecule({ children, title, textClassName = '', ...rest }: Props) {
  return (
  <Button {...rest}>
    <TextAtom className={textClassName} children text={title} />
  </Button>
  );
}
