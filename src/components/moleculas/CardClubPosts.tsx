import { Link } from "react-router-dom";
import { TextAtom } from "../atomos/TextAtom";

interface Props {
  title: string;
  subtitle: string;
  img: string;
  slug: string;
}

export default function CardClubPosts({ title, subtitle, img, slug }: Props) {
  return (
    <Link
      className="w-auto text-black hover:text-blue-600"
      to={`/blogPost/${slug}`}
    >
      <div className="w-[15.625rem] h-[25.625rem]  rounded-xl my-5 shadow-md">
        <div className="w-[15.625rem] h-[12.206rem] rounded-t-lg bg-blue-700">
          <img className="w-full h-full rounded-t-lg" src={img} />
        </div>
        <div className="w-[15.625rem]  grid content-between p-2.5">
          <TextAtom
            children
            text={title}
            className="font-medium text-left text-[15px]"
          />
          <div className="h-[130px] mt-[20px] overflow-hidden ">
            <TextAtom
              children
              text={subtitle}
              className="font-light text-left text-[12px]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
