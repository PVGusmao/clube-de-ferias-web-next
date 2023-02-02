import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { PlanningAboutUsOrganism } from "../../components/organismos/PlanningAboutUsOrganism";
import { NewWayTravelAboutUsOrganism } from "../../components/organismos/NewWayTravelAboutUsOrganism";
import { BenefitsAboutUsOrganism } from "../../components/organismos/BenefitsAboutUsOrganism";
import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { BigCommentAboutUsOrganism } from "../../components/organismos/BigCommentAboutUsOrganism";
import { StatisticsAboutUsOrganism } from "../../components/organismos/StatisticsAboutUsOrganism";

export function AboutUs() {
  return (
    <>
      <div>
        <HeaderAbout />

        <NewWayTravelAboutUsOrganism />

        <PlanningAboutUsOrganism />

        <BenefitsAboutUsOrganism />

        <BigCommentAboutUsOrganism />

        <StatisticsAboutUsOrganism />

        <BlogOrganism />
      </div>
    </>
  );
}
