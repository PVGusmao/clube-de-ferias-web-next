import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  category: string;
}

export function CardCategoriesPostsMolecule({ category }: Props) {
  return (
    <div className="flex items-center h-[40px] ml-[15px] my-[20px] pb-4 border-b-[1px] border-[#C4C4C4]">
      <AiOutlineArrowRight />
      <p className="text-[16xp] ml-3">{category}</p>
    </div>
  );
}
