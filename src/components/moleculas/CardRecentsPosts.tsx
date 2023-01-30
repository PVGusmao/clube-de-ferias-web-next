import { TextAtom } from "../atomos/TextAtom";

interface Props {
  title: string;
  img: string;
  data: string;
}

export function CardRecentsPosts({ title, img, data }: Props) {
  return (
    <div className="w-[232px] h-[79px] my-4 flex flex-row ">
      <img className="w-[78px] h-[78px] rounded-lg mr-2" src={img} />
      <div className="flex flex-col justify-between">
        <TextAtom
          children
          className="text-[16px] text-left font-bold"
          text={title}
        />
        <TextAtom children className="text-[14px] text-left" text={data} />
      </div>
    </div>
  );
}
