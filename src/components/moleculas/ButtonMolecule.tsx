import React, { ReactElement, ReactNode } from "react";

import { TextAtom } from '../atomos/TextAtom';

import { Button, ButtonProps } from "@material-tailwind/react";

type Props = ButtonProps & {
  title: string | ReactElement,
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
