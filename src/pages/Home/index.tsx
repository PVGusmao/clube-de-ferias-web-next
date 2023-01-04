import React, { useState } from "react";

import { DiApple } from "react-icons/di";

import { IconAtom } from "../../components/atomos/IconAtom";
import { TextAtom } from "../../components/atomos/TextAtom";
import { InputAtom } from "../../components/atomos/InputAtom";
import { AlertAtom } from "../../components/atomos/AlertAtom";
import { ButtonMolecule } from "../../components/moleculas/ButtonMolecule";
import { NavBarOrganism } from "../../components/organismos/NavBarOrganism";
import CardPlanosMolecule from "../../components/moleculas/CardPlanosMolecule";
import PromocaoEspecialOrganismo from "../../components/organismos/PromocaoEspecialOrganismo";
import AvatarAtom from "../../components/atomos/AvatarAtom";
import CardCommentsMolecule from "../../components/moleculas/CardCommentsMolecule";
import CardSimulationMolecule from "../../components/moleculas/CardSimulationMolecule";

export default function Home() {
  return (
    <>
      <NavBarOrganism />

      {/* <CardPlanosMolecule /> */}

      {/* <CardCommentsMolecule
        content="lorem loremloremloremloremloremloremloremloremloremloremloremlorems"
        name="Felipe"
        ocupation="Dev"
        img="https://avatars.githubusercontent.com/u/81275678?v=4"
      /> */}

      {/* <CardSimulationMolecule /> */}

      <PromocaoEspecialOrganismo />

    </>
  );
}
