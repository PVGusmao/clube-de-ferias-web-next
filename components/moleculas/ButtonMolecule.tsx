import React, { MouseEventHandler, ReactElement, ReactNode } from "react";

import { TextAtom } from '../atomos/TextAtom';

import { Button, ButtonProps } from "@material-tailwind/react";

type Props = ButtonProps & {
  title: string | ReactElement,
  children?: ReactNode,
  className?: string,
  textClassName?: string;
  onPress?: MouseEventHandler<HTMLButtonElement>;
};

export function ButtonMolecule({ children, title, className, textClassName, onPress, ...rest }: Props) {
  return (
  <Button onClick={onPress} className={className} {...rest}>
    <TextAtom className={textClassName} children text={title} />
  </Button>
  );
}
