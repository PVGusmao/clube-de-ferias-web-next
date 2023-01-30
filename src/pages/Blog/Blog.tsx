import { SliderBlogMolecule } from "../../components/moleculas/SliderBlogMolecule";
import { ClubPostsMolecule } from "../../components/moleculas/ClubPostsMolecule";
import { NewsOrganism } from "../../components/organismos/NewsOrganism";
import { useContext } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";
import Sidebar from "../../components/atomos/SideBarAtom";

export function Blog() {
  const { showMenu, setShowMenu } = useContext(MyContext) as IMyContext;

  return (
    <>
      {showMenu && (
        <div className="w-full">
          <SliderBlogMolecule />
          <ClubPostsMolecule />
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
