import React from "react";

type Props = {
  source: string;
  alt: string;
}

export function ImageAtom({ source, alt}: Props) {
  return (
    <img src={source} alt={alt} />
  )
}