import React from "react";

import { IconType } from "react-icons";

type Props = {
  icon: IconType
  size: number;
  color: string;
}

export function IconAtom({ icon, size, color }: Props) {
  
  const Icon = icon || null;

  return (
    <Icon
      size={size}
      color={color}
    />
  )
}