import headerImage from "../../assets/headerImageAboutUs.png";
import { TextAtom } from "../atomos/TextAtom";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

interface Props {
  title: string;
  subtitle: string;
  img: string;
  capa: string;
}

export function HeadeBlogPostOrganism({ title, subtitle, capa }: Props) {
  return (
    <>
      <BackgroundImageAtom
        className="flex pl-10 flex-col sm:flex-row justify-center sm:justify-start bg-auto sm:h-[500px] h-[500px] bg-cover rounded-b-[80px] sm:items-center"
        image={capa}
      >
        <div className="flex flex-col items-start sm:items-start sm:ml-48 w-[250px] sm:w-[350px]">
          <TextAtom
            children
            className="text-white text-start font-bold text-[30px] font-ubuntu mt-6 leading-[30px]	"
            text={title}
          />

          <TextAtom
            children
            className="text-white text-start  text-[20px] font-ubuntu mt-6"
            text={subtitle}
          />
        </div>
        <div className="bg-blue w h-[500px]"></div>
      </BackgroundImageAtom>
    </>
  );
}
