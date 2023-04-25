import Image from "next/image";
import Link from "next/link";
import { TextAtom } from "../atomos/TextAtom";

export interface CardClubPostsInterface {
  title: string;
  subtitle: string;
  img: string;
  slug: string;
}

export default function CardClubPosts({ title, subtitle, slug, img }: CardClubPostsInterface) {
  return (
    <Link
      className="w-auto text-black hover:text-blue-600"
      href={`/blogPost/${slug}`}
    >
      <div className="w-[15.625rem] h-[25.625rem]  rounded-xl my-5 shadow-md">
        <div className="w-[15.625rem] h-[12.206rem] rounded-t-lg bg-blue-700">
          <Image
            className="w-full h-full rounded-t-lg"
            src={img}
            width={100}
            height={100}
            alt='teste'
            loader={() => img}
          />
        </div>
        <div className="w-[15.625rem]  grid content-between p-2.5">
          <TextAtom
            text={title}
            className="font-medium text-left text-[15px]"
          > </TextAtom>
          <div className="h-[130px] mt-[20px] overflow-hidden ">
            <TextAtom
              text={subtitle}
              className="font-light text-left text-[12px]"
            > </TextAtom>
          </div>
        </div>
      </div>
    </Link>
  );
}
