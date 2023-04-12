import { IconAtom } from "../atomos/IconAtom";
import { ButtonMolecule } from "./ButtonMolecule";
import { ButtonProps } from "@material-tailwind/react";
import { IconType } from "react-icons";

type Props = ButtonProps & {
  color?: string;
  icon: IconType;
};

export function MenuHamburguerMolecule({ color, icon, ...rest }: Props) {
  return (
    <ButtonMolecule
      className="bg-inherit shadow-none border-none bg-none text-inherit border-none"
      title={<IconAtom icon={icon} color={color} size={32} />}
      {...rest}
    />
  );
}
