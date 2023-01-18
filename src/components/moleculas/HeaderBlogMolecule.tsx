import { TextAtom } from "../atomos/TextAtom";

type Props = {
  title: string;
  subtitle: string;
  text: string;
};

export function HeaderBlogMolecule({ title, subtitle, text }: Props) {
  return (
    <div className="flex flex-col justify-center  bg-blue-600 w-[44.625rem] h-full pl-36	rounded-bl-[78px]">
      <TextAtom className="text-white text-left" text={subtitle} />
      <TextAtom
        className="font-bold text-3xl text-white text-left"
        text={title}
      />
      <TextAtom className="text-xl text-white text-left " text={text} />
    </div>
  );
}
