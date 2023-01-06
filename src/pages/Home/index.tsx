import React from "react";

import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";

export default function Home() {
  return (
    <>
      <WelcomeOrganism />

      <BlogOrganism />
    </>
  );
}
