import { clubPost, clubTopPost } from "../../constants";
import CardClubPosts from "./CardClubPosts";

import { CardTopPostsLG } from "./CardTopPostsLG";
import { CardTopPostsSM } from "./CardTopPostsSM";
import { FooterOrganism } from "../organismos/FooterOrganism";
import { NewsOrganism } from "../organismos/NewsOrganism";
import { TextAtom } from "../atomos/TextAtom";

export function ClubPostsMolecule() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center mb-[100px]">
        <div className="flex flex-col mr-10">
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
            className="text-[#FF0000] text-[28px] font-medium flex justify-start mb-[12px]"
            text="Dicas de Viagem"
          />
          <div className="flex flex-wrap justify-between w-[60.625rem] ">
            {clubPost.map((element, index) => (
              <CardClubPosts
                subTitle={element.subTitle}
                text={element.text}
                title={element.title}
              />
            ))}
          </div>
        </div>
        <div className="mb-[100px]">
          <TextAtom
            className="text-[#FF0000] text-[28px] font-medium flex justify-start mb-[12px]"
            text="Destinos"
          />
          <div className="flex flex-wrap justify-between w-[60.625rem] ">
            {clubPost.map((element, index) => (
              <CardClubPosts
                subTitle={element.subTitle}
                text={element.text}
                title={element.title}
              />
            ))}
          </div>
        </div>
        <div className="mb-[100px]">
          <TextAtom
            className="text-[#FF0000] text-[28px] font-medium flex justify-start mb-[12px]"
            text="Postagens do Clube"
          />
          <div className="flex flex-wrap justify-between w-[60.625rem] ">
            {clubPost.map((element, index) => (
              <CardClubPosts
                subTitle={element.subTitle}
                text={element.text}
                title={element.title}
              />
            ))}
            {clubPost.map((element, index) => (
              <CardClubPosts
                subTitle={element.subTitle}
                text={element.text}
                title={element.title}
              />
            ))}
          </div>
        </div>
      </div>
      <NewsOrganism />
      <FooterOrganism />
    </div>
  );
}
