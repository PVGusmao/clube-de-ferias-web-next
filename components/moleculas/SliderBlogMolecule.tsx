import "react-slideshow-image/dist/styles.css";
import { Fade, Slide } from "react-slideshow-image";

import { useContext } from "react";
import { TextAtom } from "../atomos/TextAtom";
import Link from "next/link";
import Image from "next/image";
import { IMyContext, MyContext } from "@/context/MyContext";
import image from '../../public/exemplo1.jpg'

export function SliderBlogMolecule() {
  const { blogFeaturedContent } = useContext(MyContext) as IMyContext;

  return (
    <div className="">
      <div className="hidden sm:flex justify-center items-center w-full mb-10">
        <Fade arrows={false} duration={5000}>
          {blogFeaturedContent.map((element: any, index: number) => (
            <Link
              key={index}
              href={`/blogPost/${element.slug}`}
              className="flex w-full rounded-br-[50px] justify-center items-center"
            >
              <div
                className=" flex flex-col bg-[red] w-[800px] h-[350px] p-10 items-start justify-center rounded-bl-[50px]"
                key={index}
              >
                <TextAtom
                  className="text-white font-bold text-[30px] text-start leading-[35px] w-[450px]"
                  text={element?.title}
                > </TextAtom>

                <TextAtom
                  className="text-white text-[16px] text-start leading-[20px] mt-[10px] w-[450px]"
                  text={element?.subtitle}
                > </TextAtom>
              </div>
              <div className="w-[480px]" key={index}>
                <Image
                  width={500}
                  height={100}
                  className="rounded-br-[50px] h-[350px]"
                  // style={{ width: "100%" }}
                  src={image}
                  alt='foto aleatoria'
                />
              </div>
            </Link>
          ))}
        </Fade>
      </div>

      <div className="sm:hidden sm:flex items-center justify-center mb-10">
        <Slide arrows={false} transitionDuration={300} duration={2000}>
          {blogFeaturedContent?.map((element: any, index: number) => (
            <Link
              key={index}
              href={`/blogPost/${element.slug}`}
              className="flex w-full rounded-br-[50px] "
            >
              <div
                className=" flex flex-col bg-[red] w-full h-[350px] p-10 items-start justify-center rounded-bl-[50px] rounded-br-[50px]"
                key={index}
              >
                <TextAtom
                  className="text-white font-bold text-[20px] mb-[20px] text-start leading-[20px]"
                  text={element?.title}
                > </TextAtom>

                <TextAtom
                  className="text-white text-[16px] text-start leading-[20px] mt-[10px]"
                  text={element?.subtitle}
                > </TextAtom>
              </div>
            </Link>
          ))}
        </Slide>
      </div>
    </div>
  );
}
