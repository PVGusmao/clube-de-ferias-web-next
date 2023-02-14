import CardClubPosts, { CardClubPostsInterface } from "./CardClubPosts";
import { TextAtom } from "../atomos/TextAtom";
import "react-slideshow-image/dist/styles.css";
import { posts } from "../../constants/Blog";

console.log(posts);

export function ClubPostsMolecule() {
  return (
    <div className="flex flex-col justify-center items-center mb-[116px]">
      <div>
        <div className="mb-[20px]">
          <TextAtom
            children
            className="text-[#FF0000] text-[28px] font-medium flex justify-start mb-[12px]"
            text="Postagens do Clube"
          />
          <div className="sm:flex justify-between flex-wrap px-2 sm:w-[60.625rem] ">
            {posts.map((element: CardClubPostsInterface, index: number) => (
              <div className="mr-4">
                <CardClubPosts
                  image_large={element.image_large}
                  title={element.title}
                  subtitle={element.subtitle}
                  slug={element.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
