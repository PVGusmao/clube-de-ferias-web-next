import { useContext } from 'react';

import Sidebar from '@/components/atomos/SideBarAtom';
import { NewsOrganism } from '@/components/organismos/NewsOrganism';
import { NavBarMolecule } from '@/components/moleculas/NavBarMolecule';
import { FooterOrganism } from '@/components/organismos/FooterOrganism';

import { IMyContext, MyContext } from '@/context/MyContext';

import type { AppProps } from 'next/app'

import logo from '../public/logo-aviao-grande.png';
import Image from 'next/image';

export default function ComponentApp({ Component, pageProps }: AppProps) {
  const { loading, showMenu, setShowMenu } = useContext(MyContext) as IMyContext;
  return (
    <>
      {
        !loading
          && <Image
          className='w-[200px] left-[100px] top-[200px] sm:flex relative sm:w-[300px] sm:left-[480px] sm:top-[240px]'
          src={logo}
          alt='logo loading'
        />    
      }
      {
        loading && <NavBarMolecule />
      }

      {
        !showMenu && <Component {...pageProps} />
      }
      
      {
        loading && !showMenu && <NewsOrganism />
      }

      {
        loading && !showMenu && <FooterOrganism />
      }

      {
        showMenu && <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      }
    </>
  )
}
