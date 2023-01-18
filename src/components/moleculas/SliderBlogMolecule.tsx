import { Slide } from "react-slideshow-image";
import { SlideShowBlogAtom } from "../atomos/SlideShowBlogAtom";
import { TextAtom } from "../atomos/TextAtom";
import { CardSlideBlog } from "./CardSlideBlog";

import { headerPost } from "../../constants";

export function SliderBlogMolecule() {
  return (
    <div>
      <div className="flex justify-between items-center h-[32.625rem] w-[80rem] rounded-b-[78px] mb-20	 ">
        <div className="flex flex-col justify-center bg-[#FF0000] w-[44.625rem] h-full pl-32	rounded-bl-[78px]">
          <Slide arrows={false} indicators>
            {headerPost.map((element, index) => (
              <CardSlideBlog
                subtitle={element.subtitle}
                text={element.text}
                title={element.title}
              />
            ))}
          </Slide>
        </div>
        <div className="w-[35.375rem] h-[32.563rem] bg-blue-700 rounded-br-[78px]"></div>
      </div>
    </div>
  );
}
