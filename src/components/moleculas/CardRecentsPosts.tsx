import { Link } from "react-router-dom";
import { TextAtom } from "../atomos/TextAtom";

export interface CardRecentsPostsInterface {
  title: string;
  image_thumbnail: string;
  data: string;
  slug: string;
}

export function CardRecentsPosts({ title, image_thumbnail, data, slug }: CardRecentsPostsInterface) {
  return (
    <Link
      className="w-[232px] h-[79px] my-4 flex flex-row"
      to={`/blogPost/${slug}`}
    >
      <img className="w-[78px] h-[78px] rounded-lg mr-2" src={image_thumbnail} />
      <div className="flex flex-col justify-between">
        <TextAtom
          children
          className="text-[16px] text-left font-bold"
          text={title}
        />
        <TextAtom children className="text-[14px] text-left" text={data} />
      </div>
    </Link>
  );
}
