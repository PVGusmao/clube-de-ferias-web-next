import { TextAtom } from "../atomos/TextAtom";

type Props = {
  subTitle: string;
  title: string;
  text: string;
  onclick: (event: Event) => void;
};

export default function CardClubPosts({
  subTitle,
  title,
  text,
  onclick,
}: Props) {
  return (
    <button
      onClick={() => onclick}
      className="w-[10.625rem] h-[25.625rem] bg-blue-500 rounded-xl my-5"
    >
      <div className="w-[10.625rem] h-[9.206rem] rounded-t-lg bg-blue-700"></div>
      <div className="w-[9.375rem] p-2.5">
        <TextAtom children text={subTitle} className="font-light text-left" />
        <TextAtom children text={title} className="font-medium text-left" />
        <TextAtom children text={text} className="font-light text-left" />
      </div>
    </button>
  );
}
