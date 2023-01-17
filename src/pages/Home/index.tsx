import { useContext } from "react";

import { bannerContent, navigation } from "../../constants";

import Sidebar from "../../components/atomos/SideBarAtom";

import { IMyContext, MyContext } from "../../context/MyContext";

import { NewsOrganism } from "../../components/organismos/NewsOrganism";
import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { FooterOrganism } from "../../components/organismos/FooterOrganism";
import { BannerOrganism } from "../../components/organismos/BannerOrganism";
import { ClientsOrganism } from "../../components/organismos/ClientsOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";
import { SimulationOrganism } from "../../components/organismos/SimulationOrganismo";
import { Plans2Organism } from "../../components/organismos/Plans2Organism";

export default function Home() {

  const {showMenu, setShowMenu} = useContext(MyContext) as IMyContext;

  return (
    <main>
      {
        !showMenu
          && <>
            <WelcomeOrganism />

            <BlogOrganism className={"flex items-start h-full sm:mt-36 mb-4 mt-56 flex-col"} />
      
            {
              bannerContent[0].enable && <BannerOrganism />
            }
      
            <Plans2Organism />

            <SimulationOrganism />
      
            <ClientsOrganism />
      
            {
              bannerContent[1].enable && <BannerOrganism />
            }

            <NewsOrganism />
      
            <FooterOrganism navigation={navigation} /> 

          </>
      }
    
      {
        showMenu
        && <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          className="h-96"
        />
      }
    </main>
  );
}
