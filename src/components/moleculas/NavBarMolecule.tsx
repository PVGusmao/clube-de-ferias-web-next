import { useContext } from "react";

import { TextButtonMolecule } from "./TextButtonMolecule";

import { IconButtonMolecule } from "./IconButtonMolecule";

import { MenuHamburguerMolecule } from "./MenuHamburguerMolecule";
import { IMyContext, MyContext } from "../../context/MyContext";

type Props = {
  className: string;
  pageId: string;
  logoProps: {
    logo: string,
    className: string,
  }
  navLinks: any;
  socialMediaProps: {
    socialMedia: any,
    color: string,
    size: number,
  };
  textLinkProps: {
    textClassName: string;
    className: string;
  }
}

export function NavBarMolecule({ className, logoProps, navLinks, socialMediaProps, textLinkProps, pageId }: Props) {

  const {showMenu, setShowMenu} = useContext(MyContext) as IMyContext;

  return (
    <div
      id={pageId}
      className={`${className}`}
    >
      <a href="." >
        <img
          className={logoProps.className}
          src={logoProps.logo}
          alt="logo"
        />
      </a>

      <div
        className="sm:flex hidden w-auto"
      >
        {
          navLinks.map((element, index: number) => (
            <TextButtonMolecule
              textClassName={`${textLinkProps.textClassName}`}
              className={`${textLinkProps.className}`}
              key={index}
              text={element.title}
              to={element.route}
            />
          ))
        }
      </div>

      <div className='sm:hidden'>
        <MenuHamburguerMolecule
          children
          onClick={() => {setShowMenu(!showMenu)}}
          color='white'
        />
      </div>

      <div
        className="hidden sm:flex"
      >
        {
          socialMediaProps.socialMedia.map((element, index: number) => (
            <IconButtonMolecule
              target="_blank"
              key={index}
              to={element.rota}
              classNameIcon="m-2 sm:block hidden"
              color={socialMediaProps.color}
              size={socialMediaProps.size}
              icon={element.icon}
            />
          ))
        }
      </div>

    </div>
  )
}