import React from "react";

import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { SimulationOrganism } from "../../components/organismos/SimulationOrganismo";
import { FooterOrganism } from "../../components/organismos/FooterOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";

export default function Home() {
  return (
    <>
      <SimulationOrganism />
      <FooterOrganism />
    </>
  );
}
