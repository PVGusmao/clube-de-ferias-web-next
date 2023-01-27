import { Input } from "@material-tailwind/react";
import { InputAtom } from "../atomos/InputAtom";

export function SearchPostsOrganism() {
  return (
    <div className="h-[169px] mt-[45px] bg-[#C4C4C4]">
      <p className="text-white text-left text-[24px] mt-[27px] mb-[17px] ml-[18px] ">
        Pesquisar
      </p>

      <InputAtom className="w-[234px] " placeholder="Pesquisar" />
    </div>
  );
}
