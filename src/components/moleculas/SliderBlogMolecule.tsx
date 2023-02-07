import { Slide } from "react-slideshow-image";
import { SlideShowBlogAtom } from "../atomos/SlideShowBlogAtom";
import { TextAtom } from "../atomos/TextAtom";
import { CardSlideBlog } from "./CardSlideBlog";

import { headerPost } from "../../constants";

export function SliderBlogMolecule() {
  return (
    <div>
      <div className="flex justify-between items-center sm:h-[32.625rem] w-full sm:w-[80rem] sm:rounded-b-[78px] mb-20">
        <div className="flex flex-col justify-center bg-[#FF0000]  w-full sm:w-[44.625rem] h-full pl-5 sm:pl-32 sm:rounded-b-[0px] rounded-b-[50px]	sm:rounded-bl-[78px]">
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
        <div className="hidden  sm:w-[35.375rem] sm:h-[32.563rem] bg-blue-700 rounded-br-[78px]"></div>
      </div>
    </div>
  );
}
