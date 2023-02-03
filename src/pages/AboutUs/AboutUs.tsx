import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { PlanningAboutUsOrganism } from "../../components/organismos/PlanningAboutUsOrganism";
import { NewWayTravelAboutUsOrganism } from "../../components/organismos/NewWayTravelAboutUsOrganism";
import { BenefitsAboutUsOrganism } from "../../components/organismos/BenefitsAboutUsOrganism";
import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { BigCommentAboutUsOrganism } from "../../components/organismos/BigCommentAboutUsOrganism";
import { StatisticsAboutUsOrganism } from "../../components/organismos/StatisticsAboutUsOrganism";
import { HowItWorksAboutUsOrganism } from "../../components/organismos/HowItWorksAboutUsOrganism";

export function AboutUs() {
  return (
    <>
      <div>
        <HeaderAbout />

        <NewWayTravelAboutUsOrganism />

        {/* <PlanningAboutUsOrganism /> */}

        <BenefitsAboutUsOrganism />

        <HowItWorksAboutUsOrganism />

        <BigCommentAboutUsOrganism />

        {/* <StatisticsAboutUsOrganism /> */}

        <BlogOrganism />
      </div>
    </>
  );
}
