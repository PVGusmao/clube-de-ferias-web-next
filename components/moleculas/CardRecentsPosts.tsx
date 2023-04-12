import { useContext } from "react";
import { useRouter } from 'next/router'
import { IMyContext, MyContext } from "../../context/MyContext";
import api from "../../services/api";
import { TextAtom } from "../atomos/TextAtom";
import Image from "next/image";

export interface CardRecentsPostsInterface {
  title: string;
  image_thumbnail: string;
  data: string;
  slug: string;
}

export function CardRecentsPosts({
  title,
  image_thumbnail,
  data,
  slug,
}: CardRecentsPostsInterface) {
  const { data: value, setData } = useContext(MyContext) as IMyContext;
  const router = useRouter()
  return (
    <button
      type="button"
      className="w-[300px] h-[79px] my-[22px] flex flex-row"
      onClick={async () => {
        const response = await api.get(`/posts/${slug}`);
        setData(response.data.post as any);
        router.push(`/blogPost/${slug}`);
      }}
    >
      <Image
        alt='image'
        className="w-[90px] h-[110px] rounded-lg mr-2 bg-blue-300"
        src={image_thumbnail}
        width={100}
        height={100}
        loader={() => image_thumbnail}
      />
      <div className="flex flex-col justify-between">
        <TextAtom
          children
          className="text-[16px] text-left font-bold w-[150px]"
          text={title}
        />
        <TextAtom children className="text-[14px] text-left" text={data} />
      </div>
    </button>
  );
}
