import { Slide, SlideshowRef } from "react-slideshow-image";
import { CardSlideBlog } from "./CardSlideBlog";
import "react-slideshow-image/dist/styles.css";
import { headerPost } from "../../constants";
import { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import api from "../../services/api";

export function SliderBlogMolecule() {
  const [img, setImg] = useState("");
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function getData() {
    const response = await api.get("/posts");
    // console.log(response.data.featured);
    localStorage.setItem("post", JSON.stringify(response.data.featured));
    const teste = JSON.parse(localStorage.getItem("post"));
    console.log(teste[currentIndex]);
  }

  getData();

  useEffect(() => {
    // setImg(data[currentIndex].image_large);
  }, [currentIndex]);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const slideRef = useRef<SlideshowRef>(null);
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    slideRef.current.goNext();
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className="flex justify-between items-center sm:h-[32.625rem] w-full sm:w-[80rem] sm:rounded-b-[78px] mb-20">
        <div className="flex flex-col justify-center bg-[#FF0000]  w-full sm:w-[44.625rem] h-full pl-5 sm:pl-32 sm:rounded-b-[0px] rounded-b-[50px]	sm:rounded-bl-[78px]">
          <Slide autoplay={false} ref={slideRef}>
            {data.map((element, index) => (
              <CardSlideBlog
                key={index}
                subtitle={element.subtitle}
                text={element.text}
                title={element.title}
              />
            ))}
          </Slide>
        </div>

        <div className="sm:h-[32.563rem] sm:w-[35.375rem] rounded-br-[78px] relative group">
          <img
            src={`${img}`}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></img>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                {/* <RxDotFilled /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
