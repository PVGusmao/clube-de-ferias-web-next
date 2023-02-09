import { SliderBlogMolecule } from "../../components/moleculas/SliderBlogMolecule";
import { ClubPostsMolecule } from "../../components/moleculas/ClubPostsMolecule";
import { PostMainMolecule } from "../../components/moleculas/PostMainMolecule";

export function Blog() {
  return (
    <>
      <div className="w-full">
        <SliderBlogMolecule />
        <PostMainMolecule />
        <ClubPostsMolecule />
      </div>
    </>
  );
}
