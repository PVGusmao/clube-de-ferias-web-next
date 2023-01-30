import { TextAtom } from "../atomos/TextAtom";
import { CardCategoriesPostsMolecule } from "../moleculas/CardCategoriesPostsMolecule";

export function CategoriesPostsOrganism() {
  const data = [
    {
      category: "Viagens",
    },
    {
      category: "Dicas",
    },
    {
      category: "Destino",
    },
    {
      category: "O App",
    },
  ];

  return (
    <div className="h-[371px] w-[270px] shadow-lg rounded-lg pr-3   ">
      <TextAtom
        children
        className="text-[24px] my-10 font-bold text-left ml-3 "
        text="Categories"
      />
      {data.map((element, index) => (
        <CardCategoriesPostsMolecule category={element.category} />
      ))}
    </div>
  );
}
