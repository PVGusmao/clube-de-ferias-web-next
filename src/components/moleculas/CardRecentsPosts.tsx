import { Link } from "react-router-dom";
import { TextAtom } from "../atomos/TextAtom";

interface Props {
  title: string;
  img: string;
  data: string;
  slug: string;
}

export function CardRecentsPosts({ title, img, data, slug }: Props) {
  return (
    <Link
      className="w-[232px] h-[79px] my-4 flex flex-row"
      to={`/blogPost/${slug}`}
    >
      <img className="w-[78px] h-[78px] rounded-lg mr-2" src={img} />
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
