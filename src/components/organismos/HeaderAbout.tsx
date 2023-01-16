import logo from '../../assets/logo-red.png';
import headerImage from '../../assets/headerImageAboutUs.png';
import marcaDagua from '../../assets/s-logo-marda-dagua.png'

import { socialMedia } from "../../constants";
import { headerTexts, navLinksAboutUs } from '../../constants/AboutUs';
import { BackgroundImageAtom } from '../atomos/BackgroundImageAtom';

import { NavBarMolecule } from "../moleculas/NavBarMolecule";
import { TextAtom } from '../atomos/TextAtom';
import { ImageAtom } from '../atomos/ImageAtome';

export function HeaderAbout() {
  return (
    <>
      <NavBarMolecule
        className={`bg-white flex items-center w-full justify-between px-8 sm:px-0 sm:justify-evenly h-20`}
        pageId={'sobre'}
        textLinkProps={{
          textClassName: 'sm:block w-26 hover:text-[red] hover:border-b-2 font-semibold hidden text-[#9A9A9A]',
          className: 'p-2 w-40 cursor-pointer text-white hover:text-black hover:text-black ',
        }}
        logoProps={{
          logo: logo,
          className: 'w-32',
        }}
        navLinks={navLinksAboutUs}
        socialMediaProps={{
          socialMedia: socialMedia,
          color: '#9A9A9A',
          size: 24,
        }}
        burgerMenuProps={{
          color: "red"
        }}
      />

      <BackgroundImageAtom
        className='flex pl-10 flex-col sm:flex-row justify-center sm:justify-start bg-auto sm:h-[500px] h-[500px] rounded-b-[80px] sm:items-center'
        image={headerImage}
      >
        <div className='flex flex-col items-start sm:items-start sm:ml-48 w-[250px] sm:w-[350px]'>
          <TextAtom
            className='text-white font-medium text-lg font-ubuntu'
            text={headerTexts[0].title}
          > </TextAtom>

          <TextAtom
            className='text-white text-start font-medium text-3xl font-ubuntu mt-6'
            text={headerTexts[0].subtitle}
          > </TextAtom>

          <TextAtom
            className='text-white text-start font-medium text-xl font-ubuntu mt-6'
            text={headerTexts[0].body}
          > </TextAtom>
        </div>

        <ImageAtom
          className='absolute sm:relative w-48 sm:w-auto top-80 sm:top-0 left-24 sm:left-0'
          source={marcaDagua}
          alt='Logo stella barros'
        />
      </BackgroundImageAtom>
    </>
  )
}