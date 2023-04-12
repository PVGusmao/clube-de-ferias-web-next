import { IMyContext, MyContext } from "@/context/MyContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { TextAtom } from "../atomos/TextAtom";
import image from '../../public/exemplo1.jpg'

export function CardTopPostsLG() {
  const { blogFeaturedContent } = useContext(MyContext) as IMyContext;

  return (
    <div className=" w-[317px] h-[512px] sm:w-[35.688rem] sm:h-[38.063rem] flex flex-col shadow-md">
      <Image
        className="w-full h-[250px] sm:h-[23rem]"
        src={image}
        alt={'teste'}
      />
      <div className="p-7">
        <TextAtom
          className="text-left mb-5 font-medium text-xl"
          text={blogFeaturedContent[0].title}
        > </TextAtom>
        <TextAtom
          className="text-left mb-7 text-sm"
          text={blogFeaturedContent[0].subtitle}
        > </TextAtom>
        <div className="flex justify-start">
          <Link
            style={{ backgroundColor: "black", fontSize: "12px" }}
            href={`/blogPost/${blogFeaturedContent[0].slug}`}
            className="w-[6.938rem] h-[1.808rem] flex justify-center items-center rounded-lg"
          >
            <p className="text-white">Leia Mais</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
