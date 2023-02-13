import { useEffect, useState } from "react";
import { CategoriesPostsOrganism } from "../../components/organismos/CategoriesPostsOrganismo";
import { RecentsPostsOrganism } from "../../components/organismos/RecentsPostsOrganism";
import { SearchPostsOrganism } from "../../components/organismos/SearchPostsOrganism";
import { SocialNetworksOrganism } from "../../components/organismos/SocialNetworksOrganism";

import ReactHtmlParser from "react-html-parser";

import api from "../../services/api";
import { useParams } from "react-router-dom";
import { HeadeBlogOrganism } from "../../components/organismos/HeadeBlogOrganism";
import { HeadeBlogPostOrganism } from "../../components/organismos/HeadeBlogPostOrganism";

export function BlogPost() {
  const [data, setData] = useState({});
  const [post, setPost] = useState({});
  const [recents, setRecents] = useState({});

  const params = useParams();

  async function getBlogPost() {
    await api.get(`/posts/${params.slug}`).then((e) => setData(e.data.post));
  }

  useEffect(() => {
    getBlogPost();
  }, [getBlogPost]);

  return (
    <>
      <div>
        <HeadeBlogPostOrganism
          capa={data.capa}
          title={data.title}
          subtitle={data.subtitle}
        />
        <div className="flex flex-row justify-center py-12">
          <div className="w-[671px] h-full px-5 text-left">
            {ReactHtmlParser(data.post_body)}
          </div>
          <div className="sm:flex hidden h-full w-[270px] flex flex-col justify-center ml-[50px]">
            <RecentsPostsOrganism />
            {/* <CategoriesPostsOrganism />
            <SearchPostsOrganism /> */}
            <SocialNetworksOrganism />
          </div>
        </div>
      </div>
    </>
  );
}
