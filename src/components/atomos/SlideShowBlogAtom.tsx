import React from "react";
import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { minorCardBlog } from "../../constants";

import { TextAtom } from "./TextAtom";
import { BackgroundImageAtom } from "./BackgroundImageAtom";

export const SlideShowBlogAtom = () => {
  return (
    <div
      className={
        "sm:hidden w-full sm:my-0 mt-[20px] bg-cover bg-center mb-[60px]"
      }
    >
      <Slide arrows={false} transitionDuration={250}>
        {minorCardBlog.map((element, index) => (
          <div className="each-slide-effect" key={index}>
            <BackgroundImageAtom
              className={`flex items-center px-100 text-center rounded-xl mx-1 bg-cover justify-between h-36 w-96`}
              image={element.image}
            >
              <TextAtom
                children
                className="w-full text-white font-bold text-2xl text-[30px]"
                text={element.title}
              />
            </BackgroundImageAtom>
          </div>
        ))}
      </Slide>
    </div>
  );
};
