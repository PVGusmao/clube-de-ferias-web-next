import React from "react";
import { Link } from "react-router-dom";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  text: string,
  to: string,
  className?: string;
  textClassName?: string;
}

export function TextButtonMolecule({text, to, className, textClassName}: Props) {
  return (
    <Link to={to} className={className} onClick={() => {
      to.includes('#') && window.location.replace(to)
    }}>
      <TextAtom children className={textClassName} text={text} />
    </Link>
  )
}