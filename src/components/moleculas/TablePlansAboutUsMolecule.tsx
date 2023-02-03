import { AiFillStar } from "react-icons/ai";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

export function TablePlansAboutUsMolecule() {
  return (
    <div className="bg-white w-[479px] h-[217px] rounded-2xl mt-[26px]">
      <div className="flex justify-between items-center mt-[11px]">
        <TextAtom
          className="ml-[48px] font-bold text-[16px] text-black leading-[18px]"
          text="Plano"
        > </TextAtom>

        <TextAtom
          className="font-bold text-[16px] text-black leading-[18px]"
          text="Mensalidade"
        > </TextAtom>

        <div className="flex flex-col">
          <TextAtom
            className="mr-[24px] font-bold text-[16px] text-black leading-[18px]"
            text="Desconto"
          > </TextAtom>

          <TextAtom
            className="mr-[24px] font-bold text-[16px] text-black leading-[18px]"
            text="Exclusivo"
          > </TextAtom>
        </div>
      </div>

      <div className="flex justify-between mt-[11px] items-center">
        <div className="flex items-center">
          <IconAtom
            color="#888989"
            className="ml-[22px] font-bold text-[16px] leading-[18px]"
            icon={AiFillStar}
          />
          <TextAtom
            className="ml-[10px] text-[#888989] font-bold text-[16px] leading-[18px]"
            text="Silver"
          > </TextAtom>
        </div>

        <TextAtom
          className="font-bold text-[16px] text-[#888989] leading-[18px] w-[100px] text-start mr-[7px]"
          text="R$ 199"
        > </TextAtom>

        <TextAtom
          className="mr-[24px] w-[72px] text-start font-bold text-[16px] text-[#888989] leading-[18px]"
          text="6%"
        > </TextAtom>
      </div>

      <div className="w-[80%] mx-auto h-[1px] bg-[red] mt-[11px]" />

      <div className="flex justify-between mt-[11px] items-center">
        <div className="flex items-center">
          <IconAtom
            color="#F6AB39"
            className="ml-[22px] font-bold text-[16px] leading-[18px]"
            icon={AiFillStar}
          />
          <TextAtom
            className="ml-[10px] text-[#F6AB39] font-bold text-[16px] leading-[18px]"
            text="Gold"
          > </TextAtom>
        </div>

        <TextAtom
          className="font-bold text-[16px] text-[#F6AB39] leading-[18px] w-[100px] text-start"
          text="R$ 499"
        > </TextAtom>

        <TextAtom
          className="mr-[24px] w-[72px] text-start font-bold text-[16px] text-[#F6AB39] leading-[18px]"
          text="8%"
        > </TextAtom>
      </div>

      <div className="w-[80%] mx-auto h-[1px] bg-[red] mt-[11px]" />

      <div className="flex justify-between mt-[11px] items-center">
        <div className="flex items-center">
          <IconAtom
            color="#1D1D1B"
            className="ml-[22px] font-bold text-[16px] leading-[18px]"
            icon={AiFillStar}
          />
          <TextAtom
            className="ml-[10px] text-[#1D1D1B] font-bold text-[16px] leading-[18px]"
            text="Platinum"
          > </TextAtom>
        </div>

        <TextAtom
          className="font-bold text-[16px] text-[#1D1D1B] leading-[18px] w-[100px] mr-[32px] text-start"
          text="R$ 999"
        > </TextAtom>

        <TextAtom
          className="mr-[24px] w-[72px] text-start font-bold text-[16px] text-[#1D1D1B] leading-[18px]"
          text="11%"
        > </TextAtom>
      </div>

      <div className="w-[80%] mx-auto h-[1px] bg-[red] mt-[11px]" />

      <div className="flex justify-between mt-[11px] items-center">
        <div className="flex items-center">
          <IconAtom
            color="#0C9C39"
            className="ml-[22px] font-bold text-[16px] leading-[18px]"
            icon={AiFillStar}
          />
          <TextAtom
            className="ml-[10px] text-[#0C9C39] font-bold text-[16px] leading-[18px]"
            text="Plano Promo"
          > </TextAtom>
        </div>

        <TextAtom
          className="font-bold text-[16px] text-[#0C9C39] w-[120px] mr-[42px] leading-[18px] text-start"
          text="R$ 999"
        > </TextAtom>

        <TextAtom
          className="mr-[24px] w-[72px] text-start font-bold text-[16px] text-[#0C9C39] leading-[18px]"
          text="11%"
        > </TextAtom>
      </div>

    </div>
  )
}