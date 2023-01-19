import { SliderBlogMolecule } from "../../components/moleculas/SliderBlogMolecule";
import { ClubPostsMolecule } from "../../components/moleculas/ClubPostsMolecule";
import { NewsOrganism } from "../../components/organismos/NewsOrganism";

export function Blog() {
  return (
    <div className="w-full">
      <SliderBlogMolecule />
      <ClubPostsMolecule />
      <NewsOrganism />
    </div>
  );
}
