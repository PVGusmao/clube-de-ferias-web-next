import React, { useState } from "react";

import { DiApple } from "react-icons/di";

import { IconAtom } from "../../components/atomos/IconAtom";
import { TextAtom } from "../../components/atomos/TextAtom";
import { InputAtom } from "../../components/atomos/InputAtom";
import { AlertAtom } from "../../components/atomos/AlertAtom";
import { ButtonAtom } from "../../components/atomos/ButtonAtom";
import { NavBarMolecule } from "../../components/organismos/NavBarMolecule";
import CardPlanosMolecule from "../../components/moleculas/CardPlanosMolecule";
import PromocaoEspecialOrganismo from "../../components/organismos/PromocaoEspecialOrganismo";
import AvatarAtom from "../../components/atomos/AvatarAtom";
import CardCommentsMolecule from "../../components/moleculas/CardCommentsMolecule";

export default function Home() {
  const [value, setValue] = useState(false);
  return (
    <>
      <NavBarMolecule />

      <CardPlanosMolecule />

      <CardCommentsMolecule
        content="lorem loremloremloremloremlorem
      loremloremloremlorem
       loremloremlorems"
        name="Felipe"
        ocupation="Dev"
        img="https://avatars.githubusercontent.com/u/81275678?v=4"
      />

      <PromocaoEspecialOrganismo />

      <TextAtom
        children
        className="text-sm text-red-400"
        text="Meu pau de óculos."
      />

      <ButtonAtom
        children
        title="Click Me"
        variant="outlined"
        onClick={() => {
          setValue(!value);
        }}
      />

      <IconAtom icon={DiApple} size={30} color="white" />

      <InputAtom placeholder="Digite seu nome." />
      {value && (
        <AlertAtom children message="A mensagem é meramente ilustrativa" />
      )}
    </>
  );
}
