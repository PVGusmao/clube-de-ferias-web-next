import { stellaBarros } from "../../constants/AboutUs";
import { TextAtom } from "../atomos/TextAtom";

export function StellaBarrosContextAboutUsOrganism() {
  return (
    <div className="p-[10px] sm:w-[750px] m-auto">
      <TextAtom
        text={stellaBarros?.name}
        className="text-[#E00718] text-[44px] font-bold mt-[50px] mb-[47px]"
      > </TextAtom>

      <TextAtom
        text={stellaBarros?.firstText}
        className="text-[18px] mb-[47px]"
      > </TextAtom>

      <TextAtom
        className="text-[18px] mb-[47px]"
        text={stellaBarros?.secondText}
      > </TextAtom>
    </div>
  )
}