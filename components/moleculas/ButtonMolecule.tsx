import React, { MouseEventHandler, ReactElement, ReactNode } from "react";

import { TextAtom } from '../atomos/TextAtom';

import { Button } from "@material-tailwind/react";

type Props = {
  title?: any,
  children?: ReactNode,
  className?: string,
  textClassName?: string;
  onPress?: MouseEventHandler<HTMLButtonElement>;
  style?: any, 
};

export function ButtonMolecule({ title, className, textClassName, onPress, ...rest }: Props) {
  return (
  <Button onClick={onPress} className={className} {...rest}>
    <TextAtom className={textClassName} children text={title} />
  </Button>
  );
}
