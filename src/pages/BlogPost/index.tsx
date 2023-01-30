import { TextAtom } from "../../components/atomos/TextAtom";
import { CategoriesPostsOrganism } from "../../components/organismos/CategoriesPostsOrganismo";
import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { RecentsPostsOrganism } from "../../components/organismos/RecentsPostsOrganism";
import { SearchPostsOrganism } from "../../components/organismos/SearchPostsOrganism";
import { SocialNetworksOrganism } from "../../components/organismos/SocialNetworksOrganism";

import { useLocation } from "react-router-dom";
import { CardTopPostsLG } from "../../components/moleculas/CardTopPostsLG";
import { useContext, useState } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";
import Sidebar from "../../components/atomos/SideBarAtom";

export function BlogPost() {
  const { showMenu, setShowMenu } = useContext(MyContext) as IMyContext;

  const location = useLocation();

  return (
    <>
      {!showMenu && (
        <div>
          <HeaderAbout />
          <div className="flex flex-row justify-center py-12">
            <div className="w-[671px] h-full bg-blue-300"></div>
            <div className="h-full w-[270px] flex flex-col justify-center ml-[15px]">
              <RecentsPostsOrganism />
              <CategoriesPostsOrganism />
              <SearchPostsOrganism />
              <SocialNetworksOrganism />
            </div>
          </div>
        </div>
      )}

      {showMenu && (
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          className="h-96"
        />
      )}
    </>
  );
}
