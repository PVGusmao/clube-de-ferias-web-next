import { SliderBlogMolecule } from "../../components/moleculas/SliderBlogMolecule";
import { ClubPostsMolecule } from "../../components/moleculas/ClubPostsMolecule";
import { PostMainMolecule } from "../../components/moleculas/PostMainMolecule";

export function Blog() {
  return (
    <>
      <div>
        <SliderBlogMolecule />
        <PostMainMolecule />
        <ClubPostsMolecule />
      </div>
    </>
  );
}
