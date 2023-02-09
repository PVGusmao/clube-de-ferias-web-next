import { bannerContent } from "../../constants";
import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { BannerOrganism } from "../../components/organismos/BannerOrganism";
import { ClientsOrganism } from "../../components/organismos/ClientsOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";
import { SimulationOrganism } from "../../components/organismos/SimulationOrganismo";
import { Plans2Organism } from "../../components/organismos/Plans2Organism";

export default function Home() {
  return (
    <>
      <WelcomeOrganism />

      <BlogOrganism />

      {bannerContent[0].enable && <BannerOrganism />}

      <Plans2Organism />

      <SimulationOrganism />

      <ClientsOrganism />

      {/* {bannerContent[1].enable && <BannerOrganism />} */}
    </>
  );
}
