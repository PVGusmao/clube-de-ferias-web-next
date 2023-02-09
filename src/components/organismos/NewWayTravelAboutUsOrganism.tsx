import { NewWayTravel } from "../../constants/AboutUs";
import { TextAtom } from "../atomos/TextAtom";

export function NewWayTravelAboutUsOrganism() {
  return (
    <div className="flex flex-col items-start sm:ml-36 mx-auto sm:my-24">
      <TextAtom
        children
        className="text-[red] text-start font-ubuntu text-2xl sm:text-5xl font-bold sm:w-[70%] px-6 sm:px-0 mt-10 mb-10"
        text={NewWayTravel.title}
      />

      <TextAtom
        children
        className="text-start text-base sm:text-xl sm:w-[60%] px-6 sm:px-0 mb-10"
        text={NewWayTravel.subtitle_1}
      />

      <TextAtom
        children
        className="text-start text-base sm:text-xl sm:w-[60%] sm:px-0 px-6 mb-10"
        text={NewWayTravel.subtitle_2}
      />

      <TextAtom
        children
        className="text-start text-base sm:text-xl sm:w-[60%] sm:px-0 px-6 mb-10"
        text={NewWayTravel.subtitle_3}
      />
    </div>
  );
}
