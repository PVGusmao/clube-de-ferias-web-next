import { bigComment } from "../../constants/AboutUs";
import { IconAtom } from "../atomos/IconAtom";
import { ImageAtom } from "../atomos/ImageAtome";
import { TextAtom } from "../atomos/TextAtom";

export function BigCommentAboutUsOrganism() {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center">
      <div className="sm:mr-[100px] mt-10 mx-4">
        <ImageAtom
          className="w-[224px] rounded-3xl"
          source={bigComment[0].image}
          alt="foto ilustrativa"
        />

        <TextAtom
          children
          className="text-start text-2xl font-bold"
          text={bigComment[0].author}
        />
        <TextAtom
          children
          className="text-[#E00718] text-start font-bold text-sm"
          text={`Viagem: ${bigComment[0].authorSubtitle}`}
        />
      </div>

      <div className="sm:w-[300px] py-6 px-10 h-[380px] sm:mt-[180px] sm:p-0 flex flex-col ">
        <IconAtom icon={bigComment[0].icon} size={42} color="#E00718" />

        <TextAtom
          children
          className="text-start text-sm my-1 sm:my-4 sm:w-[465px]"
          text={bigComment[0].text1}
        />
      </div>
    </div>
  );
}
