import { statistics } from "../../constants/AboutUs";
import { SlideShowStatisticsAboutUsAtom } from "../atomos/SlideShowStatisticsAboutUsAtom";
import { StatisticsAboutUsMolecule } from "../moleculas/StatisticsAboutUsMolecule";

type Props = {
  className: string;
}

export function StatisticsAboutUsOrganism({className}: Props) {
  return (
    <div className={className}>
      {
        statistics.map((element) => (
          <StatisticsAboutUsMolecule
            className='hidden sm:flex items-center justify-center h-full w-full'
            element={element}
          />
        ))
      }

      <SlideShowStatisticsAboutUsAtom className='w-full sm:hidden' />
    </div>
  )
}