import React, { useState } from "react";

import { cards } from "../../constants";

import { CardMolecule } from "./CardMolecule";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

type Props = {
  className: string;
}

export function SlideShowCardMolecule({ className }: Props) {

  const [slideShow, setSlideShow] = useState(0);
  
  function leftArrowSlider() {
    slideShow === 0 ? setSlideShow(0) : setSlideShow(slideShow - 1);
  }

  function rightArrowSlider() {
    slideShow < cards.length - 1 ? setSlideShow(slideShow + 1) : setSlideShow(cards.length - 1);
  }

  return (
    <>
      <BsArrowLeftCircle
        className='sm:hidden'
        size={32}
        onClick={() => {
          leftArrowSlider();
        }}
      />

      <CardMolecule
        className={`${className}`}
        icon={cards[slideShow].icon}
        text={cards[slideShow].content}
      />

      <BsArrowRightCircle
        className='sm:hidden'
        size={32}
        onClick={() => {
          rightArrowSlider();
        }}
      />
    </>
    )
}