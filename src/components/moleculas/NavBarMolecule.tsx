import { useContext } from "react";

import { TextButtonMolecule } from "./TextButtonMolecule";

import { IconButtonMolecule } from "./IconButtonMolecule";

import { MenuHamburguerMolecule } from "./MenuHamburguerMolecule";
import { IMyContext, MyContext } from "../../context/MyContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLinksInterface, SocialMediaInterface } from "../../constants";
import { IconAtom } from "../atomos/IconAtom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import logo from "../../assets/logo-red.png";

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
        <img className={"w-32"} src={logo} alt="logo" />
      </a>

      <div className="sm:flex hidden w-auto">
        {allSiteTexts?.data?.paulo?.nav_links.map(
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

      <div className="hidden sm:flex justify-between items-center w-[100px]">
        <a href="https://www.facebook.com/clubedeferiasstellabarros">
          <BsFacebook size={25} color="red" />
        </a>
        <a href="https://www.instagram.com/oclubedeferias/">
          <BsInstagram size={25} color="red" />
        </a>
        <a href="https://www.tiktok.com/@clubedeferias">
          <FaTiktok size={25} color="red" />
        </a>
        {/* {socialMediaProps.socialMedia.map(
          (element: SocialMediaInterface, index: number) => (
            <IconButtonMolecule
              target="_blank"
              key={index}
              to={element.rota}
              classNameIcon="m-2 sm:block hidden"
              color={socialMediaProps.color}
              size={socialMediaProps.size}
              icon={element.icon}
            />
          )
        )} */}
      </div>
    </div>
  );
}
