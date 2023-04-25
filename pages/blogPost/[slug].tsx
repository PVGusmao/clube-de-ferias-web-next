import { useRouter } from 'next/router'

import { useContext, useEffect } from "react";

import { RecentsPostsOrganism } from "@/components/organismos/RecentPostsOrganism";
import { HeadeBlogPostOrganism } from "@/components/organismos/HeadeBlogPostOrganism";
import { SocialNetworksOrganism } from "@/components/organismos/SocialNetworksOrganism";

import { IMyContext, MyContext } from "../../context/MyContext";

import axios from 'axios';

export default function BlogPost() {
  const { data, setData, setRecents, setLoading, loading } = useContext(MyContext) as IMyContext;

  const router = useRouter();

  console.log(router.query);

  const { slug } = router.query;

  function getBlogPost() {
    axios.get(`https://site-api.clubedeferias.com/api/posts/${slug}`).then((e) => {setData(e.data.post); setRecents(e.data.recents)});
    setLoading(true);
  }

  useEffect(() => {
    getBlogPost();
  }, []);

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
    {
      loading &&
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
            <SocialNetworksOrganism />
          </div>
        </div>
      </div>
    }
    </>
  );
}
