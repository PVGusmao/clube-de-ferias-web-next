import React from "react";

import { IconType } from "react-icons";

type Props = {
  icon: IconType
}

export function IconAtom({ icon }: Props) {
  
  const Icon = icon || null;

  return (
    <Icon />
  )
}