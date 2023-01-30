import { TextAtom } from "../../components/atomos/TextAtom";
import { CategoriesPostsOrganism } from "../../components/organismos/CategoriesPostsOrganismo";
import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { RecentsPostsOrganism } from "../../components/organismos/RecentsPostsOrganism";
import { SearchPostsOrganism } from "../../components/organismos/SearchPostsOrganism";
import { SocialNetworksOrganism } from "../../components/organismos/SocialNetworksOrganism";

import { useLocation } from "react-router-dom";
import { CardTopPostsLG } from "../../components/moleculas/CardTopPostsLG";
import { useState } from "react";

export function BlogPost() {
  const [post, setPost] = useState([]);
  const location = useLocation();

  let props = location;
  // setPost(props);

  return (
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
  );
}
