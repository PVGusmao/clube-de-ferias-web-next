import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TextAtom } from "../atomos/TextAtom";

export interface CardTopPostsInterface {
  title: string;
  subtitle: string;
  slug: string;
  text: string;
};

export function CardTopPostsSM({ title, subtitle, slug }: CardTopPostsInterface) {
  return (
    <div className="w-[318px] h-[271px] sm:w-[23.125rem] sm:h-[18.25rem] flex flex-col justify-center p-7	sm:mb-0 mb-6 shadow-md">
      <TextAtom
        children
        className="text-left mb-5 font-medium text-xl"
        text={title}
      />
      <div className="h-[83px] mb-[24px]">
        <TextAtom children className="text-left mb-7 text-sm" text={subtitle} />
      </div>
      <Link
        to={`/blogPost/${slug}`}
        style={{ backgroundColor: "black", fontSize: "12px" }}
        className="w-[6.938rem] h-[1.808rem] flex justify-center items-center rounded-lg"
      >
        <p className="text-white">Leia Mais</p>
      </Link>
    </div>
  );
}
