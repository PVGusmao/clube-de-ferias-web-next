import { cards, home, textButtonWelcome } from '../../constants';

import { TextAtom } from '../atomos/TextAtom';
import { VideoAtom } from '../atomos/VideoAtom';

import { CardMolecule } from '../moleculas/CardMolecule';
import { ButtonMolecule } from '../moleculas/ButtonMolecule';

import { SlideShowWelcomeAtom } from '../atomos/SlideShowWelcomeAtom';

type Props = {
  className: string;
}

export function WelcomeMolecule({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className='sm:mt-16 flex flex-col sm:flex-row sm:h-80 h-full justify-center'>
        <div className='flex flex-col sm:mr-24 items-center sm:items-start sm:text-start justify-between sm:w-108 w-full px-10 sm:px-0'>
          <TextAtom
            children
            text={home.subtitle}
            className='mb-4 sm:mb-0 font-medium text-white sm:text-lg text-md'
          />

          <TextAtom
            children
            text={home.title}
            className='mb-4 sm:mb-0 font-medium text-white sm:text-5xl text-2xl' 
          />

          <TextAtom
            children
            text={home.content}
            className='mb-4 sm:mb-0 font-medium text-black text-sm'
          />

          <ButtonMolecule
            className='flex mb-6 sm:mb-0 items-center justify-center w-48 bg-[#F20F0F] h-12 shadow-2xl'
            textClassName='text-lg font-medium text-white'
            children
            title={textButtonWelcome}
          />
        </div>

        <VideoAtom
          className='rounded-xl flex items-center justify-center sm:w-108 w-[80%] sm:h-auto h-64 sm:h-80 mx-auto sm:mx-0'
        />
      </div>

      <div className='flex w-full flex-wrap items-center justify-evenly mt-16 sm:mt-32'>

        {
          cards.map((element, index) => (
            <CardMolecule
              color='red'
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