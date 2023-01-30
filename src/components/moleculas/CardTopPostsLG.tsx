import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  title: string;
  subtitle: string;
  text: string;
};

export function CardTopPostsLG({ title, subtitle, text }: Props) {
  const navigate = useNavigate();

  function handleClick({ title, subtitle, text }: Props) {
    navigate("/blogPost");
  }

  return (
    <div className="w-[35.688rem] h-[38.063rem] flex flex-col  shadow-md">
      <div className="w-full h-[23rem] bg-blue-500"></div>
      <div className="p-7">
        <TextAtom children className="text-left text-lg	 mb-1" text={title} />
        <TextAtom
          children-
          className="text-left mb-5 font-medium text-xl"
          text={subtitle}
        />
        <TextAtom children className="text-left mb-7 text-sm" text={text} />
        <div className="flex justify-start">
          <Button
            onClick={handleClick}
            style={{ backgroundColor: "black", fontSize: "12px" }}
            variant="contained"
            className="w-[6.938rem] h-[1.808rem]"
          >
            Leia Mais
          </Button>
        </div>
      </div>
    </div>
  );
}
