import { TextAtom } from "../atomos/TextAtom";
import { CardRecentsPosts } from "../moleculas/CardRecentsPosts";

export function RecentsPostsOrganism() {
  return (
    <div className="w-[270px] h-[467px] flex items-center rounded-lg shadow-md flex-col mb-[39px] bg-blue-700">
      <TextAtom
        children
        className="text-left text-[24px] font-bold w-full my-[24px] ml-[15px]"
        text="Recents"
      />
      <CardRecentsPosts />
      <CardRecentsPosts />
      <CardRecentsPosts />
    </div>
  );
}
