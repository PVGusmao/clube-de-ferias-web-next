import React, { useContext } from "react";
import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { minorCardBlog, MinorCardBlogInterface } from "../../constants/Home";

import { TextAtom } from "./TextAtom";
import { BackgroundImageAtom } from "./BackgroundImageAtom";
import { IMyContext, MyContext } from "../../context/MyContext";

export const SlideShowBlogAtom = () => {
  const { allSiteTexts } = useContext(MyContext) as IMyContext;

  return (
    <div
      className={
        "sm:hidden w-full sm:my-0 mt-[20px] bg-cover bg-center mb-[60px]"
      }
    >
      <Slide arrows={false} transitionDuration={250}>
        {allSiteTexts?.data?.paulo?.minor_card_blog.map((element: MinorCardBlogInterface, index: number) => (
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
