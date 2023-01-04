import React from "react";

import { IconType } from "react-icons";

type Props = {
  icon: IconType
  size?: number;
  color?: string;
  className?: string;
}

export function IconAtom({ icon, size, color, className }: Props) {
  
  const Icon = icon || null;

  return (
    <Icon
      className={className}
      size={size}
      color={color}
    />
  )
}