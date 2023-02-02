import { statistics } from "../../constants/AboutUs";
import { SlideShowStatisticsAboutUsAtom } from "../atomos/SlideShowStatisticsAboutUsAtom";
import { StatisticsAboutUsMolecule } from "../moleculas/StatisticsAboutUsMolecule";

export function StatisticsAboutUsOrganism() {
  return (
    <div className="flex sm:flex-row flex-col justify-around bg-gray w-full h-full sm:h-48 sm:mt-24">
      {statistics.map((element) => (
        <StatisticsAboutUsMolecule
          className="hidden sm:flex items-center justify-center h-full w-full"
          element={element}
        />
      ))}

      <SlideShowStatisticsAboutUsAtom className="w-full sm:hidden" />
    </div>
  );
}
