import { useContext, useEffect } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import api from "../../services/api";

import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { PlansOrganism } from "../../components/organismos/PlansOrganism";
import { BannerOrganism } from "../../components/organismos/BannerOrganism";
import { ClientsOrganism } from "../../components/organismos/ClientsOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";
import { SimulationOrganism } from "../../components/organismos/SimulationOrganismo";

export default function Home() {
  const { setAllSiteTexts, allSiteTexts, setLoading, loading } = useContext(MyContext) as IMyContext;

  async function getTextsForHome() {
    const response = await api.get("/pages");
    console.log(response);
    localStorage.setItem("home", JSON.stringify(response));
    setAllSiteTexts(response as any);
    setLoading(true);
  }

  useEffect(() => {
    getTextsForHome();
  }, []);

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);
  
  return (
    <>
    {
      allSiteTexts && loading &&
      <>
        <WelcomeOrganism data={allSiteTexts} />

        <PlansOrganism data={allSiteTexts} />

        <SimulationOrganism data={allSiteTexts} />

        {allSiteTexts?.data.paulo.banner[0].enable && (
          <BannerOrganism data={allSiteTexts} />
        )}

        <BlogOrganism />

        <ClientsOrganism />

        {allSiteTexts?.data.paulo.banner[1].enable && (
          <BannerOrganism data={allSiteTexts} />
        )}
      </>
    }
    </>
  );
}
