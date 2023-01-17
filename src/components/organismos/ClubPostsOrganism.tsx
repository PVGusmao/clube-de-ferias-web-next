import { clubPost, clubTopPost } from "../../constants";
import CardClubPosts from "../moleculas/CardClubPosts";

import { CardTopPostsLG } from "../moleculas/CardTopPostsLG";
import { CardTopPostsSM } from "../moleculas/CardTopPostsSM";
import { FooterOrganism } from "./FooterOrganism";
import { NewsOrganism } from "./NewsOrganism";

export function ClubPostsOrganism() {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-300">
      <div className="flex justify-center">
        <div className="flex flex-col mr-10">
          {clubTopPost.map((element, index) => (
            <CardTopPostsSM
              title={element.title}
              subtitle={element.subTitle}
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
      <div className="flex flex-wrap justify-between w-[60.625rem] ">
        {clubPost.map((element, index) => (
          <CardClubPosts
            subTitle={element.subTitle}
            text={element.text}
            title={element.title}
          />
        ))}
      </div>
      <NewsOrganism />
      <FooterOrganism />
    </div>
  );
}
