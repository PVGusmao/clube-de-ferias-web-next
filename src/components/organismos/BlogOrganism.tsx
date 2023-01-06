import React from "react";

import imageBlog1 from '../../assets/imageBlog1.png';

import { TextAtom } from "../atomos/TextAtom";
import { BlogCardMolecule } from "../moleculas/BlogCardMolecule";

export function BlogOrganism() {
  return (
    <div className="flex w-full h-full mt-40 mb-40 flex-col">
      <TextAtom
        className="text-left text-4xl font-semibold uppercase"
        children
        text="Blog"
      />

      <BlogCardMolecule
        className=""
        image={imageBlog1}
      />

      {
        
      }
    </div>
  )
}