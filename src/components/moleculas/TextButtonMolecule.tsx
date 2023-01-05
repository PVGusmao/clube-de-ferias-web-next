import React from "react";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  text: string,
  href: string,
  target: string,
  className?: string;
  textClassName?: string;
}

export function TextButtonMolecule({text, href, target, className, textClassName}: Props) {
  return (
    <a href={href} target={target} className={className} >
      <TextAtom children className={textClassName} text={text} />
    </a>
  )
}