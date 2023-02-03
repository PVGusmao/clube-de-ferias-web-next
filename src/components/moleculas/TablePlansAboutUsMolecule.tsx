import { AiFillStar } from "react-icons/ai";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  midSection: any;
}

export function TablePlansAboutUsMolecule({midSection}: Props) {
  return (
    <div className="bg-white w-full sm:w-[479px] h-[217px] rounded-2xl mt-[26px]">
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
            text={midSection.plans[0].plan}
          > </TextAtom>
        </div>

        <TextAtom
          className="font-bold text-[16px] text-[#888989] leading-[18px] sm:w-[100px] text-start mr-[7px]"
          text={midSection.plans[0].value}
        > </TextAtom>

        <TextAtom
          className="mr-[24px] w-[72px] text-start font-bold text-[16px] text-[#888989] leading-[18px]"
          text={midSection.plans[0].discount}
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
            text={midSection.plans[1].plan}
          > </TextAtom>
        </div>

        <TextAtom
          className="font-bold text-[16px] text-[#F6AB39] leading-[18px] sm:w-[100px] text-start"
          text={midSection.plans[1].value}
        > </TextAtom>

        <TextAtom
          className="mr-[24px] w-[72px] text-start font-bold text-[16px] text-[#F6AB39] leading-[18px]"
          text={midSection.plans[1].discount}
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
            text={midSection.plans[2].plan}
          > </TextAtom>
        </div>

        <TextAtom
          className="font-bold text-[16px] text-[#1D1D1B] leading-[18px] sm:w-[100px] mr-[32px] text-start"
          text={midSection.plans[2].value}
        > </TextAtom>

        <TextAtom
          className="mr-[24px] w-[72px] text-start font-bold text-[16px] text-[#1D1D1B] leading-[18px]"
          text={midSection.plans[2].discount}
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
            text={midSection.plans[3].plan}
          > </TextAtom>
        </div>

        <TextAtom
          className="font-bold text-[16px] text-[#0C9C39] sm:w-[120px] sm:mr-[42px] leading-[18px] text-start"
          text={midSection.plans[3].value}
        > </TextAtom>

        <TextAtom
          className="mr-[24px] w-[72px] text-start font-bold text-[16px] text-[#0C9C39] leading-[18px]"
          text={midSection.plans[3].discount}
        > </TextAtom>
      </div>

    </div>
  )
}