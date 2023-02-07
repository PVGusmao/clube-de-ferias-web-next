import { clubPost, clubTopPost } from "../../constants";
import CardClubPosts from "./CardClubPosts";

import { CardTopPostsLG } from "./CardTopPostsLG";
import { CardTopPostsSM } from "./CardTopPostsSM";
import { TextAtom } from "../atomos/TextAtom";
import api from "../../services/api";
import { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";

export function ClubPostsMolecule() {
  const [post, setPost] = useState([]);

  async function getData() {
    await api.get("/posts").then((e) => setPost(e.data.posts));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="mb-[20px]">
          <TextAtom
            children
            className="text-[#FF0000] text-[28px] font-medium flex justify-start mb-[12px]"
            text="Postagens do Clube"
          />
          <div className="sm:flex justify-between flex-wrap px-2 sm:w-[60.625rem] ">
            {post.map((element, index) => (
              <div className="mr-4">
                <CardClubPosts
                  img={element.image_large}
                  title={element.title}
                  subtitle={element.subtitle}
                  slug={element.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
