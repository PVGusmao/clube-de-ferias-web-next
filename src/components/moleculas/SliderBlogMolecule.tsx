import { useEffect, useState } from "react";
import api from "../../services/api";

import '../../index.css';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from 'react-slideshow-image';

import { TextAtom } from "../atomos/TextAtom";

export function SliderBlogMolecule() {
  const [value, setValue] = useState([]);

  async function getData() {
    const response = await api.get('/posts');
    setValue(response?.data?.featured);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <div className="hidden sm:flex justify-center w-full mb-10">
        <Fade arrows={false} indicators duration={2000}>
          {value?.map((element, index) => (
            <div className="flex w-full rounded-br-[50px] ">
              <div className=" flex flex-col bg-[red] w-full h-[350px] p-10 items-start justify-center rounded-bl-[50px]" key={index}>
                <TextAtom
                  className="text-white font-bold text-[20px] text-start leading-[50px]"
                  text={element?.seo_title}
                > </TextAtom>
                
                <TextAtom
                  className="text-white font-bold text-[16px] text-start leading-[20px]"
                  text={element?.title}
                > </TextAtom>

                <TextAtom
                  className="text-white font-bold text-[16px] text-start leading-[20px] mt-[10px]"
                  text={element?.subtitle}
                > </TextAtom>
              </div>
              <div className="w-full" key={index}>
                <img className="rounded-br-[50px] h-[350px]" style={{ width: '100%' }} src={element?.image_large} />
              </div>
            </div>
          ))}
        </Fade>
      </div>

      <div className="sm:hidden flex items-center justify-center mb-10">
        <Slide arrows={false} indicators transitionDuration={200} duration={2000}>
          {value?.map((element, index) => (
            <div className="flex w-full rounded-br-[50px] ">
              <div className=" flex flex-col bg-[red] w-full h-[350px] p-10 items-start justify-center rounded-bl-[50px] rounded-br-[50px]" key={index}>
                <TextAtom
                  className="text-white font-bold text-[20px] text-start leading-[50px]"
                  text={element?.seo_title}
                > </TextAtom>
                
                <TextAtom
                  className="text-white font-bold text-[16px] text-start leading-[20px]"
                  text={element?.title}
                > </TextAtom>

                <TextAtom
                  className="text-white font-bold text-[16px] text-start leading-[20px] mt-[10px]"
                  text={element?.subtitle}
                > </TextAtom>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
