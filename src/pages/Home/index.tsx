import React from "react";

import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { PlansOrganism } from "../../components/organismos/PlansOrganism";
import { FooterOrganism } from "../../components/organismos/FooterOrganism";
import { BannerOrganism } from "../../components/organismos/BannerOrganism";
import { ClientsOrganism } from "../../components/organismos/ClientsOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";
import { SimulationOrganism } from "../../components/organismos/SimulationOrganismo";
import { SlideShowBlogAtom } from "../../components/atomos/SlideShowBlogAtom";
import { SlideShowWelcomeAtom } from "../../components/atomos/SlideShowWelcomeAtom";

export default function Home() {
  return (
    <>
      <WelcomeOrganism />

      <BlogOrganism />

      <BannerOrganism />

      <SimulationOrganism />

      <PlansOrganism />

      <ClientsOrganism />

      <FooterOrganism />
    </>
  );
}
