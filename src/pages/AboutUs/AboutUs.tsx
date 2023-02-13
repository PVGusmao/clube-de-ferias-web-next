import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { BenefitsAboutUsOrganism } from "../../components/organismos/BenefitsAboutUsOrganism";
import { BigCommentAboutUsOrganism } from "../../components/organismos/BigCommentAboutUsOrganism";
import { HowItWorksAboutUsOrganism } from "../../components/organismos/HowItWorksAboutUsOrganism";
import { NewWayTravelAboutUsOrganism } from "../../components/organismos/NewWayTravelAboutUsOrganism";

export function AboutUs() {
  return (
    <>
      <div>
        <HeaderAbout />

        <NewWayTravelAboutUsOrganism />

        <BenefitsAboutUsOrganism />

        <HowItWorksAboutUsOrganism />

        <BigCommentAboutUsOrganism />
      </div>
    </>
  );
}
