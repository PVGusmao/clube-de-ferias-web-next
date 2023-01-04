import { Typography, TypographyProps } from "@material-tailwind/react";
import React from "react";

type Props = TypographyProps & {
  text: string,
  className: string,
}

export function TextAtom({text, className, ...rest}: Props) {
  return (
    <Typography className={className} {...rest}>
      {text}
    </Typography>
  )
}