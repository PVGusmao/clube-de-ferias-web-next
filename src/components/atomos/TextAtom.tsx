import { Typography, TypographyProps } from "@material-tailwind/react";
import React from "react";

type Props = TypographyProps & {
  text: string,
  className?: string,
}

export function TextAtom({text, className, ...rest}: Props) {
  return (
    <Typography className={`font-ubuntu text-black ${className}`} {...rest}>
      {text}
    </Typography>
  )
}