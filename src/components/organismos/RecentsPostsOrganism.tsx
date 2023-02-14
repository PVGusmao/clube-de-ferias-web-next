import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";
import { TextAtom } from "../atomos/TextAtom";
import { CardRecentsPosts, CardRecentsPostsInterface } from "../moleculas/CardRecentsPosts";

export function RecentsPostsOrganism() {
  const { recents } = useContext(MyContext) as IMyContext;

  console.log(recents)

  return (
    <div className="w-[270px] h-[467px] flex items-center rounded-lg shadow-md flex-col mb-[39px]">
      <TextAtom
        children
        className="text-left text-[24px] font-bold w-full ml-[30px] my-[20px]"
        text="Recentes"
      />

      {recents && recents?.map((element: CardRecentsPostsInterface, index: number) => (
        <CardRecentsPosts
          title={element.title}
          image_thumbnail={element.image_thumbnail}
          data={element.data}
          slug={element.slug}
        />
      ))}
    </div>
  );
}
