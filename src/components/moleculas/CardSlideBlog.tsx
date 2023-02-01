import { TextAtom } from "../atomos/TextAtom";

type Props = {
  title: string;
  subtitle: string;
  text: string;
};

export function CardSlideBlog({ title, subtitle, text }: Props) {
  return (
    <div className="my-[100px]">
      <TextAtom className="text-white text-left" text={subtitle} />
      <TextAtom
        className="font-bold text-3xl	text-white text-left"
        text={subtitle}
      />
      <TextAtom className="text-xl text-white text-left " text={text} />
    </div>
  );
}
