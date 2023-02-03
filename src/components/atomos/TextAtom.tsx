import React from "react";
import { Typography, TypographyProps } from "@material-tailwind/react";

type Props = TypographyProps & {
  text: string,
  className?: string,
  style?: React.CSSProperties;
}

export function TextAtom({style, text, className, ...rest}: Props) {
  return (
    <Typography style={style} className={`text-black ${className} font-ubuntu`} {...rest}>
      {text}
    </Typography>
  )
}