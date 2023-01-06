import React from "react";

import imageBlog1 from '../../assets/imageBlog1.png';

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

      {
        
      }
    </div>
  )
}