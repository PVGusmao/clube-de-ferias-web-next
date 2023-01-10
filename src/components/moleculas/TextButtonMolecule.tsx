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
    <Link rel="noreferrer" to={!to.includes('#') ? to : ''} className={className} onClick={() => {
      window.location.replace(to.includes('#') ? to : '')
    }}>
      <TextAtom children className={textClassName} text={text} />
    </Link>
  )
}