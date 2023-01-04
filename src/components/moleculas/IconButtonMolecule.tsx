import React from "react";

import { IconType } from "react-icons";

import { IconAtom } from "../atomos/IconAtom";

type Props = {
  href: string,
  target: string,
  icon: IconType,
  color: string,
  size: number,
  classNameIcon: string,
}

export function IconButtonMolecule({href, target, icon, color, size, classNameIcon}: Props) {
  return (
    <a href={href} target={target}>
      <IconAtom
        className={classNameIcon}
        icon={icon}
        color={color}
        size={size}
      />
    </a>
  )
}