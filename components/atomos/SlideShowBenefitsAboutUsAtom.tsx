import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import { Slide } from "react-slideshow-image";

import { ImageAtom } from "./ImageAtom";

// import "../../index.css";
import "react-slideshow-image/dist/styles.css";

type Props = {
  className?: string;
};

export const SlideShowBenefitsAboutUsAtom = ({ className }: Props) => {
  const { aboutUsTexts } = useContext(MyContext) as IMyContext;

  console.log(aboutUsTexts);

  return (
    <div className={`${className} mt-10`}>
      <Slide arrows={false} transitionDuration={250}>
        {aboutUsTexts.benefits.map((element: any, index: number) => (
          <div className="h-30 flex items-center justify-center" key={index}>
            <div className="h-30 sm:flex mb-[100px] items-start justify-evenly">
              {/* <ImageAtom className="mt-0 w-[350px]" source={element.photo_url} alt="plans" /> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
