import React, { useContext } from "react";
import Sidebar from "../../components/atomos/SideBarAtom";
import { TextAtom } from "../../components/atomos/TextAtom";
import { FooterOrganism } from "../../components/organismos/FooterOrganism";
import { FormOrganism } from "../../components/organismos/FormOrganism";
import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { NewsOrganism } from "../../components/organismos/NewsOrganism";
import { IMyContext, MyContext } from "../../context/MyContext";

export function TalkToUs() {
  const { showMenu, setShowMenu } = useContext(MyContext) as IMyContext;

  return (
    <>
      {!showMenu && (
        <div className="flex flex-col items-center ">
          <TextAtom
            children
            className=" text-[25px] sm:text-[44px] font-bold  mt-10"
            text="Olá, aqui você pode tirar suas dúvidas:"
          />
          <FormOrganism />
        </div>
      )}

      {showMenu && (
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          className="h-96"
        />
      )}
    </>
  );
}
