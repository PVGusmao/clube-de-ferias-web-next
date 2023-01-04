import React from "react";
import styles from "../../styles";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";
import { TextAtom } from "../atomos/TextAtom";

export default function PromocaoEspecialOrganismo() {
  return (
    <div
      className={`flex justify-center items-stretch w-full h-36 px-16 rounded-lg bg-[#F20F0F]  `}
    >
      <TextAtom
        children
        text="PROMOÇÃO ESPECIAL"
        className="text-3xl text-center text-white self-center	"
      />
      <TextAtom
        children
        className="text-center self-center px-4 text-white"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus mattis, pulvinar dapibus leo."
      />
      <ButtonMolecule
        className="bg-white h-11 self-center w-48 text-black"
        children
        title="BAIXE O APP"
      />
    </div>
  );
}
