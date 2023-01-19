import { TextAtom } from "../atomos/TextAtom";

type Props = {
  categoy: string;
  title: string;
  text: string;
  img: string;
  onclick: (event: Event) => void;
};

export default function CardClubPosts({
  categoy,
  title,
  text,
  img,
  onclick,
}: Props) {
  return (
    <div className="w-[10.625rem] h-[25.625rem] rounded-xl my-5  shadow-md    ">
      <div className="w-[10.625rem] h-[9.206rem] rounded-t-lg bg-blue-700">
        <img src={img} />
      </div>
      <div className="w-[9.375rem] p-2.5">
        <TextAtom
          children
          text={categoy}
          className="font-light text-left text-[13px]"
        />
        <TextAtom
          children
          text={title}
          className="font-medium text-left text-[15px]"
        />
        <div className="h-[130px] overflow-hidden ">
          <TextAtom
            children
            text={text}
            className="font-light text-left text-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
