import { TextAtom } from "../atomos/TextAtom";
import { CardTopPostsLG } from "./CardTopPostsLG";
import { CardTopPostsSM } from "./CardTopPostsSM";

import { featured } from "../../constants/Blog";

export function PostMainMolecule() {
  return (
    <div className="mt-[100px]">
      <TextAtom
        children
        className="sm:flex hidden text-[#FF0000] text-[20px] sm:text-[28px] sm:ml-[150px] font-medium text-left mb-[40px]"
        text="Nossas principais postagens"
      />
      <div className="sm:flex flex sm:flex-row flex-col items-center justify-center mb-[100px]">
        <TextAtom
          children
          className="flex sm:hidden text-[#FF0000] text-[23px] sm:text-[28px] sm:ml-[150px] font-medium text-left mb-[40px]"
          text="Nossas principais postagens"
        />
        <div className="sm:flex flex-col sm:mr-10 sm:justify-between h-[38.063rem]">
          {featured.map((element, index) => (
            <CardTopPostsSM
              title={element.title}
              subtitle={element.subtitle}
              slug={element.slug}
            />
          ))}
        </div>
        <CardTopPostsLG />
      </div>
    </div>
  );
}
