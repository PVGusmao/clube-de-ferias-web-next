import { IconAtom } from "../atomos/IconAtom";

import { PlansDescriptions } from "../../constants/AboutUs";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  element: PlansDescriptions;
  className: string;
}

export function PlanningAboutUsMolecule({ element, className }: Props) {
  return (
    <div className={`${className}`}>
      
      <div className="my-2 h-24">
        <div className="flex rounded-lg items-center bg-gradient-to-b from-white to-[red] justify-center w-10 h-10 mr-2">
          <IconAtom color="white" size={20} icon={element.icon} />
        </div>
      </div>

      <div className="w-72 flex flex-col ml-2">
        <TextAtom
          className="text-start font-bold font-ubuntu text-lg"
          text={element.title}
        > </TextAtom>
        <TextAtom
          className="text-start"
          text={element.text}
        > </TextAtom>
      </div>
    </div>
  )
}