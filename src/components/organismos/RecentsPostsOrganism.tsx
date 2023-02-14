import { featured } from "../../constants/Blog";
import { TextAtom } from "../atomos/TextAtom";
import { CardRecentsPosts } from "../moleculas/CardRecentsPosts";

export function RecentsPostsOrganism() {
  return (
    <div className="w-[270px] h-[467px] flex items-center rounded-lg shadow-md flex-col mb-[39px]">
      <TextAtom
        children
        className="text-left text-[24px] font-bold w-full ml-[30px] my-[20px]"
        text="Recents"
      />
      {featured.map((element, index) => (
        <CardRecentsPosts
          title={element.title}
          img={element.image_thumbnail}
          data={element.data}
          slug={element.slug}
        />
      ))}
    </div>
  );
}
