import React, { ReactElement, ReactNode } from "react";

import { TextAtom } from '../atomos/TextAtom';

import { Button, ButtonProps } from "@material-tailwind/react";

type Props = ButtonProps & {
  title: string | ReactElement,
  children?: ReactNode,
  className?: string,
  textClassName?: string;
};

export function ButtonMolecule({ children, title, className, textClassName = '', ...rest }: Props) {
  return (
  <Button className={className} {...rest}>
    <TextAtom className={textClassName} children text={title} />
  </Button>
  );
}
