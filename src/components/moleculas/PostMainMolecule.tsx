import { TextAtom } from "../atomos/TextAtom";
import { CardTopPostsLG } from "./CardTopPostsLG";
import { CardTopPostsSM } from "./CardTopPostsSM";

import { featured } from "../../constants/Blog";

export function PostMainMolecule() {
  return (
    <div>
      <TextAtom
        children
        className="text-[#FF0000] text-[28px] sm:ml-[150px] font-medium text-left mb-[40px]"
        text="Nossas principais postagens"
      />
      <div className="sm:flex flex sm:flex-row flex-col items-center justify-center mb-[100px]">
        <div className="sm:flex flex-col sm:mr-10">
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
