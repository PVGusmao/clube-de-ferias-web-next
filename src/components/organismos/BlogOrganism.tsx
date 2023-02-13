import { cardBlog, minorCardBlog } from "../../constants";

import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";
import { SlideShowBlogAtom } from "../atomos/SlideShowBlogAtom";

import { TextAtom } from "../atomos/TextAtom";
import { BlogCardMolecule } from "../moleculas/BlogCardMolecule";

export function BlogOrganism() {
  return (
    <div
      id="blog"
      className="flex items-start h-full sm:mt-[200px] mb-4 flex-col"
    >
      <TextAtom
        className="text-4xl font-semibold uppercase pl-6 mt-[100px] sm:mt-0"
        children
        text="Blog"
      />

      <BlogCardMolecule />

      <SlideShowBlogAtom />
    </div>
  );
}
