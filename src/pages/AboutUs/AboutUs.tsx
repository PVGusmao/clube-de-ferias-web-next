import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { BenefitsAboutUsOrganism } from "../../components/organismos/BenefitsAboutUsOrganism";
import { BigCommentAboutUsOrganism } from "../../components/organismos/BigCommentAboutUsOrganism";
import { HowItWorksAboutUsOrganism } from "../../components/organismos/HowItWorksAboutUsOrganism";
import { NewWayTravelAboutUsOrganism } from "../../components/organismos/NewWayTravelAboutUsOrganism";
import { StellaBarrosContextAboutUsOrganism } from "../../components/organismos/StellaBarrosContextAboutUsOrganism";

export function AboutUs() {
  return (
    <>
      <div>
        <HeaderAbout />

        <NewWayTravelAboutUsOrganism />

        <BenefitsAboutUsOrganism />

        <HowItWorksAboutUsOrganism />

        <BigCommentAboutUsOrganism />

        <StellaBarrosContextAboutUsOrganism />
      </div>
    </>
  );
}
