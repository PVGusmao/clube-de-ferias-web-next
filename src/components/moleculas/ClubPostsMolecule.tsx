import { clubPost, clubTopPost } from "../../constants";
import CardClubPosts from "./CardClubPosts";

import { CardTopPostsLG } from "./CardTopPostsLG";
import { CardTopPostsSM } from "./CardTopPostsSM";
import { TextAtom } from "../atomos/TextAtom";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";

export function ClubPostsMolecule() {
  const [post, setPost] = useState([]);

  async function getData() {
    await api.get("/posts").then((res) => setPost(res.data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="sm:flex flex sm:flex-row flex-col items-center justify-center mb-[100px]">
        <div className="sm:flex flex-col sm:mr-10">
          {clubTopPost.map((element, index) => (
            <CardTopPostsSM
              title={element.title}
              subtitle={element.subtitle}
              text={element.text}
            />
          ))}
        </div>
        <CardTopPostsLG
          title="Stories | Tips"
          subtitle="Destinos em alta para o verão!"
          text="Seja no Brasil ou fora, o verão é a época preferida para viagens. A tão falada “alta temporada” é conhecida assim não é à toa e, pra mostrar que o verão pode ser ainda melhor se você souber onde ir, preparamos uma lista com destinos em alta"
        />
      </div>
      <div>
        <div className="mb-[100px]">
          <TextAtom
            children
            className="text-[#FF0000] text-[28px] font-medium flex justify-start mb-[12px]"
            text="Postagens do Clube"
          />
          <div className="sm:flex justify-between hidden px-2 sm:w-[60.625rem] ">
            {post.map((element, index) => (
              <CardClubPosts
                img={element.image_large}
                title={element.title}
                subtitle={element.subtitle}
                slug={element.slug}
              />
            ))}
          </div>
          <div className="sm:hidden w-full">
            <Slide arrows={false} indicators transitionDuration={250}>
              {post.map((element, index) => (
                <div className="flex items-center h-full justify-center bg-blue-300 ">
                  <CardClubPosts
                    img={element.image_large}
                    title={element.title}
                    subtitle={element.subtitle}
                    slug={element.slug}
                  />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
