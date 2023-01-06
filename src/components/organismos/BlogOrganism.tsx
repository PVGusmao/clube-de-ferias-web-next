import React from "react";

import imageBlog1 from '../../assets/imageBlog1.png';
import { minorCardBlog } from "../../constants";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

import { TextAtom } from "../atomos/TextAtom";
import { BlogCardMolecule } from "../moleculas/BlogCardMolecule";

export function BlogOrganism() {
  return (
    <div className="flex items-center h-full mt-64 sm:mt-36 mb-4 flex-col">
      <TextAtom
        className="text-left text-4xl font-semibold uppercase"
        children
        text="Blog"
      />

      <BlogCardMolecule
        className=""
        image={imageBlog1}
      />

      <div className="sm:hidden sm:w-auto w-96 flex flex-row sm:w-auto sm:flex-col justify-between  overflow-x-auto">
        {
          minorCardBlog.map((element, index) => (
            <BackgroundImageAtom
              className={`flex items-center text-center rounded-xl m-2 justify-between h-36 w-96`}
              image={element.image}
              key={index}
            >
              <TextAtom
                children
                className="w-full text-white font-bold text-sm"
                text={element.title}
              />
            </BackgroundImageAtom>
          ))
        }
      </div>

    </div>
  )
}