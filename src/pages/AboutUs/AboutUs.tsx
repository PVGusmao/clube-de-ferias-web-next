import React, { useContext } from "react";
import Sidebar from "../../components/atomos/SideBarAtom";
import { HeaderAbout } from "../../components/organismos/HeaderAbout";
import { IMyContext, MyContext } from "../../context/MyContext";

export function AboutUs() {

  const {showMenu, setShowMenu} = useContext(MyContext) as IMyContext;

  return (
    <>
      {
        !showMenu &&
        <div>
          <HeaderAbout />  
        </div>    
      }

      {
        showMenu
        && <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          className="h-96"
        />
      }
    </>
  )
}