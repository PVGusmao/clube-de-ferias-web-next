import api from "../../services/api";
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from 'react-slideshow-image';
import { useEffect, useState } from "react";
import '../../index.css';
import { TextAtom } from "../atomos/TextAtom";

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
];

export function SliderBlogMolecule() {
  const [value, setValue] = useState([]);

  async function getData() {
    const response = await api.get('/posts');
    setValue(response?.data?.featured);
  }

  console.log(value);
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center w-full mb-10">
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
  );
}
