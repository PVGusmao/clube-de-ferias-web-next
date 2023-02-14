import api from "../../services/api";
import { debounce } from "lodash";
import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { RecentsPostsOrganism } from "../../components/organismos/RecentsPostsOrganism";
import { HeadeBlogPostOrganism } from "../../components/organismos/HeadeBlogPostOrganism";
import { SocialNetworksOrganism } from "../../components/organismos/SocialNetworksOrganism";

export function BlogPost() {
  const [data, setData] = useState({});
  const params = useParams();

  function getBlogPost() {
    api.get(`/posts/${params.slug}`).then((e) => setData(e.data.post));
    // setData(response.data.post);
  }

  // const debouncedFetchData = debounce(getBlogPost, 5000);

  useEffect(() => {
    getBlogPost();
  }, [data]);

  // console.log(data);

  return (
    <>
      <div>
        <HeadeBlogPostOrganism
          capa={data.capa}
          title={data.title}
          subtitle={data.subtitle}
        />
        <div className="flex flex-row justify-center py-12">
          <div
            dangerouslySetInnerHTML={{ __html: data.post_body }}
            className="w-[671px] h-full px-5 text-left"
          ></div>
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
