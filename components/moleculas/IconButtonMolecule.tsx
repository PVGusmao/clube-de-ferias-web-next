import Link from "next/link";
import { IconType } from "react-icons";

import { IconAtom } from "../atomos/IconAtom";

type Props = {
  to: string,
  target?: string,
  icon: IconType,
  color: string,
  size: number,
  classNameIcon: string,
}

export function IconButtonMolecule({to, target, icon, color, size, classNameIcon}: Props) {
  return (
    <Link href={to} target={target} rel="noreferrer">
      <IconAtom
        className={classNameIcon}
        icon={icon}
        color={color}
        size={size}
      />
    </Link>
  )
}