import { TextAtom } from "../atomos/TextAtom";

export function CategoriesPostsOrganism() {
  return (
    <div className="bg-blue-700 h-[305px] w-[270px] ">
      <TextAtom children text="Categories" />
      <div className="flex h-[40px] ml-[15px]">
        <p className="mr-[15px]">seta</p>
        <p>Dicas</p>
      </div>
      <div className="flex h-[40px] ml-[15px]">
        <p className="mr-[15px]">seta</p>
        <p>Destino</p>
      </div>
      <div className="flex h-[40px] ml-[15px]">
        <p className="mr-[15px]">seta</p>
        <p>O App</p>
      </div>
    </div>
  );
}
