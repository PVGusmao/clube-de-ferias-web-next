import "../../index.css";
import "react-slideshow-image/dist/styles.css";
import { Fade, Slide } from "react-slideshow-image";

import { TextAtom } from "../atomos/TextAtom";

import { featured } from "../../constants/Blog";
import { Link } from "react-router-dom";

export function SliderBlogMolecule() {
  return (
    <div className="">
      <div className="hidden sm:flex justify-center w-full mb-10">
        <Fade arrows={false} duration={7000}>
          {featured?.map((element, index) => (
            <Link
              to={`/blogPost/${element.slug}`}
              className="flex w-full rounded-br-[50px] "
            >
              <div
                className=" flex flex-col bg-[red] w-[800px] h-[350px] p-10 items-start justify-center rounded-bl-[50px]"
                key={index}
              >
                <TextAtom
                  children
                  className="text-white font-bold text-[30px] text-start leading-[35px] w-[450px]"
                  text={element?.title}
                />

                <TextAtom
                  children
                  className="text-white text-[16px] text-start leading-[20px] mt-[10px] w-[450px]"
                  text={element?.subtitle}
                />
              </div>
              <div className="w-[480px]" key={index}>
                <img
                  className="rounded-br-[50px] h-[350px]"
                  style={{ width: "100%" }}
                  src={element?.image_large}
                />
              </div>
            </Link>
          ))}
        </Fade>
      </div>

      <div className="sm:hidden sm:flex items-center justify-center mb-10">
        <Slide arrows={false} transitionDuration={300} duration={2000}>
          {featured?.map((element, index) => (
            <Link
              to={`/blogPost/${element.slug}`}
              className="flex w-full rounded-br-[50px] "
            >
              <div
                className=" flex flex-col bg-[red] w-full h-[350px] p-10 items-start justify-center rounded-bl-[50px] rounded-br-[50px]"
                key={index}
              >
                <TextAtom
                  children
                  className="text-white font-bold text-[20px] mb-[20px] text-start leading-[20px]"
                  text={element?.title}
                />

                <TextAtom
                  children
                  className="text-white text-[16px] text-start leading-[20px] mt-[10px]"
                  text={element?.subtitle}
                />
              </div>
            </Link>
          ))}
        </Slide>
      </div>
    </div>
  );
}
