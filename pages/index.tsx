import { useContext, useEffect } from "react";

import api from "@/services/api";
import { IMyContext, MyContext } from "@/context/MyContext";

import { BlogOrganism } from "@/components/organismos/BlogOrganism";
import { PlansOrganism } from "@/components/organismos/PlansOrganism";
import { BannerOrganism } from "@/components/organismos/BannerOrganism"; 
import { ClientsOrganism } from "@/components/organismos/ClientsORganism";
import { WelcomeOrganism } from "@/components/organismos/WelcomeOrganism";
import { SimulationOrganism } from "@/components/organismos/SimulationOrganism";
import axios from "axios";

export default function Home() {
  const { setAllSiteTexts, allSiteTexts, setLoading, loading } = useContext(MyContext) as IMyContext;

  async function getTextsForHome() {
    try {
      // const response = await api.get("/pages");
      const response = await api.get('/paulo');
      console.log(response);
      localStorage.setItem("home", JSON.stringify(response));
      setAllSiteTexts(response as any);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
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
    <div className="flex items-center justify-center">
    {
      allSiteTexts && loading &&
      <div className="sm:w-[1280px] w-full">
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
      </div>
    }
    </div>
  );
}
