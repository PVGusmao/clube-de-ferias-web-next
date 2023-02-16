import { useContext } from "react";
import { Link } from "react-router-dom";
import { IMyContext, MyContext } from "../../context/MyContext";

import { TextAtom } from "../atomos/TextAtom";

export function CardTopPostsLG() {
  const { blogFeaturedContent } = useContext(MyContext) as IMyContext;

  return (
    <div className=" w-[317px] h-[512px] sm:w-[35.688rem] sm:h-[38.063rem] flex flex-col shadow-md">
      <img
        className="w-full h-[250px] sm:h-[23rem]"
        src={blogFeaturedContent[0].image_large}
      />
      <div className="p-7">
        <TextAtom
          children
          className="text-left mb-5 font-medium text-xl"
          text={blogFeaturedContent[0].title}
        />
        <TextAtom
          children
          className="text-left mb-7 text-sm"
          text={blogFeaturedContent[0].subtitle}
        />
        <div className="flex justify-start">
          <Link
            style={{ backgroundColor: "black", fontSize: "12px" }}
            to={`/blogPost/${blogFeaturedContent[0].slug}`}
            className="w-[6.938rem] h-[1.808rem] flex justify-center items-center rounded-lg"
          >
            <p className="text-white">Leia Mais</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
