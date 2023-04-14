import { useContext, useEffect } from "react";

import { HeaderAbout } from "@/components/organismos/HeaderAbout";
import { BenefitsAboutUsOrganism } from "@/components/organismos/BenefitsAboutUsOrganism";
import { BigCommentAboutUsOrganism } from "@/components/organismos/BigCommentAboutUsOrganism";
import { HowItWorksAboutUsOrganism } from "@/components/organismos/HowItWorksAboutUsOrganism";
import { NewWayTravelAboutUsOrganism } from "@/components/organismos/NewWayTravelAboutUsOrganism";

import api from "../../services/api";

import { IMyContext, MyContext } from "../../context/MyContext";
import axios from "axios";

export default function Sobre() {
  const { aboutUsTexts, setAboutUsTexts, setLoading, loading } = useContext(MyContext) as IMyContext;

  async function getTextsForAboutUs() {
    try {
      // const response = await api.get('/pages/quemsomos');
      const response = await api.get('/quemsomos');
  
      setAboutUsTexts(response.data.content as any);
      setLoading(true);
      localStorage.setItem("about2", JSON.stringify(response));
    } catch(err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getTextsForAboutUs();
  }, [])
  
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);
  
  return (
    <div className="sm:flex sm:items-center sm:justify-center">
      <div className="sm:w-[1280px]">
        {
          aboutUsTexts && loading &&
        <div>
          <HeaderAbout />

          <NewWayTravelAboutUsOrganism />

          <BenefitsAboutUsOrganism />

          <HowItWorksAboutUsOrganism />

          <BigCommentAboutUsOrganism />
        </div>
        }
      </div>
    </div>
  );
}
