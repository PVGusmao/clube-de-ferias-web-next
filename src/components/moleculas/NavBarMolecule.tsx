import { useContext } from "react";

import { TextButtonMolecule } from "./TextButtonMolecule";

import { MenuHamburguerMolecule } from "./MenuHamburguerMolecule";

import { IMyContext, MyContext } from "../../context/MyContext";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { NavLinksInterface } from "../../constants";

import logo from "../../assets/logo-red.png";

import { SocialMediaMolecule } from "./SocialMediaMolecule";

export function NavBarMolecule() {
  const { showMenu, setShowMenu, allHeaderTexts } = useContext(
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
        <img className={"w-32"} src={logo} alt="logo" />
      </a>

      <div className="sm:flex hidden w-auto">
        {allHeaderTexts?.data?.content?.nav_links.map(
          (element: NavLinksInterface, index: number) => (
            <TextButtonMolecule
              textClassName={
                "sm:block hover:text-[darkgray] font-semibold hidden text-[#F20F0F]"
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
