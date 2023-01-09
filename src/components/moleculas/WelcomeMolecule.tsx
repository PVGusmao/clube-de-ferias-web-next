import React, { useState } from 'react';

import { cards, home } from '../../constants';

import { TextAtom } from '../atomos/TextAtom';
import { VideoAtom } from '../atomos/VideoAtom';

import { CardMolecule } from '../moleculas/CardMolecule';
import { ButtonMolecule } from '../moleculas/ButtonMolecule';

import { SlideShowWelcomeAtom } from '../atomos/SlideShowWelcomeAtom';

type Props = {
  className: string;
}

export function WelcomeMolecule({ className }: Props) {

  const [slideShow, setSlideShow] = useState(0);

  return (
    <div className={`${className}`}>
      <div className='sm:mt-16 flex flex-col sm:flex-row sm:h-96 h-full justify-center'>
        <div className='flex flex-col items-center sm:items-start sm:text-start justify-between sm:w-96 w-full px-10 sm:px-0'>
          <TextAtom
            children
            text={home[0].subtitle}
            className='uppercase mb-4 sm:mb-0 font-medium text-white sm:text-lg text-md'
          />

          <TextAtom
            children
            text={home[0].title}
            className='uppercase mb-4 sm:mb-0 font-medium text-white sm:text-5xl text-2xl' 
          />

          <TextAtom
            children
            text={home[0].content}
            className='uppercase mb-4 sm:mb-0 font-medium text-black text-sm'
          />

          <ButtonMolecule
            className='flex mb-6 sm:mb-0 items-center justify-center w-48 bg-[#F20F0F] h-12 shadow-2xl'
            textClassName='text-lg font-medium text-white'
            children
            title='OUR PROJETCT'
          />
        </div>

        <VideoAtom
          className='sm:w-96 w-auto sm:h-auto h-80 mx-auto sm:mx-0'
        />
      </div>

      <div className='flex w-full flex-wrap items-center justify-evenly mt-16 sm:mt-24'>

        {
          cards.map((element, index) => (
            <CardMolecule
              color='black'
              className='flex justify-center flex-col h-52 rounded-2xl bg-white shadow-lg hidden sm:flex block shadow-2xl w-52'
              key={index}
              icon={element.icon}
              text={element.content}
            />
          ))
        }

        <SlideShowWelcomeAtom className='w-full' />
      </div>
    </div>
  )
}