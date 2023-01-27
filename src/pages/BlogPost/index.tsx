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
      <div className="flex flex-row justify-center bg-blue-200">
        <div className="w-[671px] h-[1000px] bg-blue-300">
          <img
            className="w-[675px] h-[533px] "
            src="https://avatars.githubusercontent.com/u/81275678?v=4"
            alt=""
          />
          <div className="bg-blue-700 ">
            <CardTopPostsLG
              title={props.state.title}
              subtitle={props.state.subtitle}
              text={props.state.text}
            />
          </div>
        </div>
        <div className="h-[800px] w-[270px] flex flex-col justify-center ml-[15px] bg-blue-400">
          <RecentsPostsOrganism />
          <CategoriesPostsOrganism />
          <SearchPostsOrganism />
          <SocialNetworksOrganism />
        </div>
      </div>
    </div>
  );
}
