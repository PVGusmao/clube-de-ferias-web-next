import React from "react";

import { cardBlog, minorCardBlog } from "../../constants";

import { TextAtom } from "../atomos/TextAtom";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

type Props = {
  className: string;
  image: string;
}

export function BlogCardMolecule({ className, image}: Props) {
  return (
    <div className="w-full h-559 flex sm:flex-row flex-col">
      <BackgroundImageAtom
        className={`sm:pl-6 sm:w-672 h-80 sm:px-0 sm:mr-0 px-1 m-2 sm:mr-6 flex flex-col justify-end text-start rounded-xl ${className}`}
        image={image}
      >
        <TextAtom
          children
          className="font-bold text-6xl mb-2 text-white tracking-widest uppercase"
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

      <div className="flex w-full flex-col justify-between">
        {
          minorCardBlog.map((element, index) => (
            <BackgroundImageAtom
              className={`flex items-center text-center rounded-xl sm:m-0 m-2 justify-between h-32 w-auto ${className}`}
              image={element.image}
              key={index}
            >
              <TextAtom
                children
                className="w-full text-white font-bold text-4xl"
                text={element.title}
              />
            </BackgroundImageAtom>
          ))
        }
      </div>

    </div>
  )
}
