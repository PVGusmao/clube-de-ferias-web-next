import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { BenefitsAboutUsOrganism } from "../../components/organismos/BenefitsAboutUsOrganism";
import { BigCommentAboutUsOrganism } from "../../components/organismos/BigCommentAboutUsOrganism";
import { HowItWorksAboutUsOrganism } from "../../components/organismos/HowItWorksAboutUsOrganism";
import { NewWayTravelAboutUsOrganism } from "../../components/organismos/NewWayTravelAboutUsOrganism";
import { useContext, useEffect } from "react";
import api from "../../services/api";
import { IMyContext, MyContext } from "../../context/MyContext";

export function AboutUs() {
  const { aboutUsTexts, setAboutUsTexts } = useContext(MyContext) as IMyContext;

  async function item2() {
    const response = await api.get('/pages/quemsomos');
    setAboutUsTexts(response.data.content as any);
    localStorage.setItem("about2", JSON.stringify(response));
  }
  
  useEffect(() => {
    item2();
  }, [])
  
  return (
    <>
      {
        aboutUsTexts &&
      <div>
        <HeaderAbout />

        <NewWayTravelAboutUsOrganism />

        <BenefitsAboutUsOrganism />

        <HowItWorksAboutUsOrganism />

        <BigCommentAboutUsOrganism />
      </div>
      }
    </>
  );
}
