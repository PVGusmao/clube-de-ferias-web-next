import React from 'react';

import { cards, home } from '../../constants';

import { TextAtom } from '../atomos/TextAtom';
import { VideoAtom } from '../atomos/VideoAtom';

import { CardMolecule } from '../moleculas/CardMolecule';
import { ButtonMolecule } from '../moleculas/ButtonMolecule';

export function WelcomeOrganism() {
  return (
    <div className='w-full'>
      <div className='mt-16 flex h-96 justify-center'>
        <div className='flex flex-col text-start justify-between w-96 mr-12'>
          <TextAtom
            children
            text={home[0].subtitle}
            className='uppercase font-medium text-white text-lg'
          />

          <TextAtom
            children
            text={home[0].title}
            className='uppercase font-medium text-white text-5xl' 
          />

          <TextAtom
            children
            text={home[0].content}
            className='uppercase font-medium text-black text-sm'
          />

          <ButtonMolecule
            className='flex items-center justify-center w-48 bg-[#F20F0F] h-12 shadow-2xl'
            textClassName='text-lg font-medium'
            children
            title='OUR PROJETCT'
          />
        </div>

        <VideoAtom
          className='w-96'
        />
      </div>

      <div className='flex items-center justify-evenly mt-16'>
        {
          cards.map((element, index) => (
            <CardMolecule
              className='shadow-2xl'
              key={index}
              icon={element.icon}
              text={element.content}
            />
          ))
        }
      </div>
    </div>
  )
}