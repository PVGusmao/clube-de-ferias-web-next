import { cardBlog, minorCardBlog } from "../../constants";

import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";
import { SlideShowBlogAtom } from "../atomos/SlideShowBlogAtom";

import { TextAtom } from "../atomos/TextAtom";
import { BlogCardMolecule } from "../moleculas/BlogCardMolecule";

type Props = {
  className: string;
}
export function BlogOrganism({className}: Props) {
  return (
    <div id="blog" className={className}>
      <TextAtom
        className="text-4xl font-semibold uppercase pl-6"
        children
        text="Blog"
      />

      <BlogCardMolecule
        className=""
        image={cardBlog.image}
      />

      <SlideShowBlogAtom className="sm:hidden w-full"/>

    </div>
  )
}