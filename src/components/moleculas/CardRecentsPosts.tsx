import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMyContext, MyContext } from "../../context/MyContext";
import api from "../../services/api";
import { TextAtom } from "../atomos/TextAtom";

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
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="w-[232px] h-[79px] my-4 flex flex-row"
      onClick={async () => {
        const response = await api.get(`/posts/${slug}`);
        setData(response.data.post as any);
        navigate(`/blogPost/${slug}`);
      }}
    >
      <img
        className="w-[60px] h-[78px] rounded-lg mr-2"
        src={image_thumbnail}
      />
      <div className="flex flex-col justify-between">
        <TextAtom
          children
          className="text-[16px] text-left font-bold"
          text={title}
        />
        <TextAtom children className="text-[14px] text-left" text={data} />
      </div>
    </button>
  );
}
