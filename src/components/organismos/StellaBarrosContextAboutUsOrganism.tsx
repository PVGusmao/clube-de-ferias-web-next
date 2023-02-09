import { stellaBarros } from "../../constants/AboutUs";
import { TextAtom } from "../atomos/TextAtom";

export function StellaBarrosContextAboutUsOrganism() {
  return (
    <div className="p-[10px] sm:w-[750px] m-auto">
      <TextAtom
        children
        text={stellaBarros?.name}
        className="text-[#E00718] text-[44px] font-bold mt-[20px] mb-[47px]"
      />

      <TextAtom
        children
        text={stellaBarros?.firstText}
        className="text-[18px] mb-[47px]"
      />

      <TextAtom
        children
        className="text-[18px] mb-[130px]"
        text={stellaBarros?.secondText}
      />
    </div>
  );
}
