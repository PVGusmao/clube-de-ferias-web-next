import { Statistics } from "../../constants/AboutUs"
import { IconAtom } from "../atomos/IconAtom"
import { TextAtom } from "../atomos/TextAtom"

type Props = {
  className: string;
  element: Statistics;
}

export function StatisticsAboutUsMolecule({ className, element }: Props) {
  return (
    <div className={className}>
      <IconAtom color="white" size={64} icon={element.icon} />

      <div className="relative w-[100px]">
        <TextAtom
          className="text-4xl font-bold text-white"
          text={element.data}
        > </TextAtom>

        <TextAtom
          className="text-sm text-white font-medium"
          text={element.dataType}
        > </TextAtom>

        <IconAtom color="white" className="absolute top-0 right-0" icon={element.iconTopRight} />
      </div>
    </div>
  )
}