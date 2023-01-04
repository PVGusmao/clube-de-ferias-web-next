import React from "react";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  text: string,
  href: string,
  target: string,
}

export function TextButtonMolecule({text, href, target}: Props) {
  return (
    <a href={href} target={target} className='p-2 cursor-pointer text-white' >
      <TextAtom children text={text} />
    </a>
  )
}