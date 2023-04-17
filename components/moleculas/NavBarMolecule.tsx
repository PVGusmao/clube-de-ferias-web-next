import Image from "next/image";
import { useContext, useEffect } from "react";

import { TextButtonMolecule } from "./TextButtonMolecule";

import { SocialMediaMolecule } from "./SocialMediaMolecule";
import { MenuHamburguerMolecule } from "./MenuHamburguerMolecule";

import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLinksInterface } from "../../constants";

import logo from "../../public/logo-red.png";

import { IMyContext, MyContext } from "../../context/MyContext";

export function NavBarMolecule() {
  const { showMenu, setShowMenu, allSiteTexts } = useContext(
    MyContext
  ) as IMyContext;

  return (
    <div
      id={"home"}
      className={
        "text-white flex items-center w-full justify-between px-8 sm:px-0 sm:justify-evenly h-20"
      }
    >
      <a href="/">
        <Image className={"w-32"} src={logo} alt="logo" />
      </a>

      <div className="sm:flex hidden w-auto">
        {allSiteTexts?.paulo?.nav_links.map(
          (element: NavLinksInterface, index: number) => (
            <TextButtonMolecule
              textClassName={
                "sm:block hover:text-[darkgray] text-center font-semibold hidden text-[#F20F0F]"
              }
              className={
                "w-32 cursor-pointer text-white hover:border-2 hover:border-b-[darkgray]"
              }
              key={index}
              text={element.title}
              to={element.route}
            />
          )
        )}
      </div>

      <div className="sm:hidden">
        {showMenu ? (
          <MenuHamburguerMolecule
            children
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            color={"red"}
            icon={AiOutlineClose}
          />
        ) : (
          <MenuHamburguerMolecule
            children
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            color={"red"}
            icon={GiHamburgerMenu}
          />
        )}
      </div>

      <SocialMediaMolecule color="red" />
    </div>
  );
}
