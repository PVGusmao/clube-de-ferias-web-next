import { TextAtom } from "../atomos/TextAtom";

type Props = {
  data?: any;
};

export function FooterPlansMolecule({ data }: Props) {
  return (
    <>
      <div className="bg-[#FF0111] flex flex-col sm:flex-row sm:h-48 rounded-2xl mx-12 items-center justify-evenly sm:mt-[80px] border border-[lightgray] shadow-md">
        <div className="my-10 sm:my-0">
          <TextAtom
            children
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[0].text1}
          />

          <TextAtom
            children
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[0].text2}
          />
          <TextAtom
            children
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[0].text3}
          />
        </div>

        <div className="sm:w-1 bg-[lightgray] sm:h-[70%] w-[70%] h-1" />

        <div className="my-10 sm:my-0">
          <TextAtom
            children
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[1].text1}
          />

          <TextAtom
            children
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[1].text2}
          />

          <TextAtom
            children
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[1].text3}
          />
        </div>

        <div className="sm:w-1 bg-[lightgray] sm:h-[70%] w-[70%] h-1" />

        <div className="my-10 sm:my-0">
          <TextAtom
            children
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[2].text1}
          />

          <TextAtom
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[2].text2}
          >
            {" "}
          </TextAtom>

          <TextAtom
            className="text-[white] font-bold text-[20px] leading-[151%] tracking-wide"
            text={data.data.paulo.sub_plans_text[2].text3}
          >
            {" "}
          </TextAtom>
        </div>
      </div>
    </>
  );
}
