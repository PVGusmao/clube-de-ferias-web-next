import { useContext } from "react";

import { MyContext } from "../../context/MyContext";

import { NewsOrganism } from "../../components/organismos/NewsOrganism";
import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { PlansOrganism } from "../../components/organismos/PlansOrganism";
import { FooterOrganism } from "../../components/organismos/FooterOrganism";
import { BannerOrganism } from "../../components/organismos/BannerOrganism";
import { ClientsOrganism } from "../../components/organismos/ClientsOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";
import { SimulationOrganism } from "../../components/organismos/SimulationOrganismo";

import Sidebar from "../../components/atomos/SideBarAtom";

export default function Home() {

  const {showMenu, setShowMenu} = useContext(MyContext);

  console.log(showMenu);

  return (
    <main>
      {
        !showMenu
          && <>
            <WelcomeOrganism />

            <BlogOrganism />
      
            <BannerOrganism />
      
            <SimulationOrganism />
      
            <PlansOrganism />
      
            <ClientsOrganism />
      
            <NewsOrganism />
      
            <FooterOrganism /> 

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
