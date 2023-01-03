import { Typography, TypographyProps } from "@material-tailwind/react";
import React from "react";

type Props = TypographyProps & {
  text: string,
}

export function TextAtom({text, ...rest}: Props) {
  return (
    <Typography {...rest}>
      {text}
    </Typography>
  )
}