import { NewWayTravel } from "../../constants/AboutUs";
import { TextAtom } from "../atomos/TextAtom";

export function NewWayTravelAboutUsOrganism() {
  return (
    <div className="flex flex-col items-center sm:my-24">
      <TextAtom
        className="font-ubuntu text-2xl sm:text-5xl font-bold sm:w-[70%] px-6 sm:px-0 mt-10 mb-10"
        text={NewWayTravel[0].text1}
      > </TextAtom>

      <TextAtom
        className="font-ubuntu text-base sm:text-xl font-medium sm:w-[60%] px-6 sm:px-0 mb-10"
        text={NewWayTravel[0].text2}
      > </TextAtom>

      <TextAtom
        className="font-ubuntu text-base sm:text-xl font-medium sm:w-[60%] sm:px-0 px-6 mb-10"
        text={NewWayTravel[0].text3}
      > </TextAtom>
    </div>
  )
}