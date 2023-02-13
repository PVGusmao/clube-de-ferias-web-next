import React from "react";

import { cardBlog, minorCardBlog } from "../../constants";

import { TextAtom } from "../atomos/TextAtom";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

export function BlogCardMolecule() {
  return (
    <div className="sm:h-108 flex sm:flex-row flex-col">
      <BackgroundImageAtom
        className="sm:pl-6 h-[400px] sm:h-80 sm:h-auto sm:px-0 sm:mr-0 px-1 m-2 sm:mr-6 flex flex-col justify-end text-start rounded-xl bg-cover bg-cover"
        image={cardBlog.image}
      >
        <TextAtom
          children
          className="font-bold text-6xl mb-2 text-white sm:w-[700px] tracking-widest uppercase"
          text={cardBlog.title}
        />

        <TextAtom
          children
          className="text-2xl text-white mb-2"
          text={cardBlog.subTitle}
        />

        <TextAtom
          children
          className="font-medium text-white text-lg mb-6"
          text={cardBlog.message}
        />
      </BackgroundImageAtom>

      <div className="sm:flex hidden flex-row w-auto sm:flex-col justify-between">
        {minorCardBlog.map((element, index) => (
          <BackgroundImageAtom
            className={`flex items-center  text-left pl-[15px] rounded-xl m-2 justify-between h-32 sm:w-96 bg-cover`}
            image={element.image}
            key={index}
          >
            <TextAtom
              children
              className="w-full text-white font-bold text-[20px] w-[200px] leading-[30px] "
              text={element.title}
            />
          </BackgroundImageAtom>
        ))}
      </div>
    </div>
  );
}
