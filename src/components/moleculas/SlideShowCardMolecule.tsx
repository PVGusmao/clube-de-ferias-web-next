import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { cards } from "../../constants";

import { CardMolecule } from "./CardMolecule";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

type Props = {
  className: string;
  children: ReactNode;
  setSlideShow: Dispatch<SetStateAction<number>>;
  slideShow: number;
  colorIcon: string;
}

export function SlideShowCardMolecule({ className, children, slideShow, setSlideShow, colorIcon = 'white' }: Props) {
  
  function leftArrowSlider() {
    slideShow === 0 ? setSlideShow(0) : setSlideShow(slideShow - 1);
  }

  function rightArrowSlider() {
    slideShow < cards.length - 1 ? setSlideShow(slideShow + 1) : setSlideShow(cards.length - 1);
  }

  return (
    <div className={className}>
      <BsArrowLeftCircle
        className='sm:hidden'
        color={colorIcon}
        size={48}
        onClick={() => {
          leftArrowSlider();
        }}
      />

      {children}

      <BsArrowRightCircle
        className='sm:hidden'
        size={48}
        color={colorIcon}
        onClick={() => {
          rightArrowSlider();
        }}
      />
    </div>
    )
}