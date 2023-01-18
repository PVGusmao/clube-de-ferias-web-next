import { Button } from "@mui/material";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  title: string;
  subtitle: string;
  text: string;
};

export function CardTopPostsSM({ title, subtitle, text }: Props) {
  return (
    <div className="w-[23.125rem] h-[18.25rem] flex flex-col justify-center p-7	mb-6 shadow-md">
      <TextAtom children className="text-left mb-1" text={title} />
      <TextAtom
        children
        className="text-left mb-5 font-medium text-xl"
        text={subtitle}
      />
      <div className="h-[83px] mb-[24px]">
        <TextAtom children className="text-left mb-7 text-sm" text={text} />
      </div>
      <Button
        style={{ backgroundColor: "black", fontSize: "12px" }}
        variant="contained"
        className="w-[6.938rem] h-[1.808rem]"
      >
        Leia Mais
      </Button>
    </div>
  );
}