import api from "../../services/api";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecentsPostsOrganism } from "../../components/organismos/RecentsPostsOrganism";
import { HeadeBlogPostOrganism, HeadeBlogPostOrganismInterface } from "../../components/organismos/HeadeBlogPostOrganism";
import { SocialNetworksOrganism } from "../../components/organismos/SocialNetworksOrganism";
import { IMyContext, MyContext } from "../../context/MyContext";

export function BlogPost() {
  // const [data, setData] = useState<HeadeBlogPostOrganismInterface>({
  //   capa: '',
  //   title: '',
  //   subtitle: '',
  //   img: ''
  // });
  const {data, setData} = useContext(MyContext) as IMyContext;

  const params = useParams();

  function getBlogPost() {
    api.get(`/posts/${params.slug}`).then((e) => setData(e.data.post));
  }

  useEffect(() => {
    getBlogPost();
  }, []);

  return (
    <>
      <div>
        <HeadeBlogPostOrganism
          capa={data.capa}
          title={data.title}
          subtitle={data.subtitle}
          img={""}
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
