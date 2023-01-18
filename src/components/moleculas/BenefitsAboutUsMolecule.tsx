import { Benefits } from "../../constants/AboutUs";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  className: string;
  element: Benefits;
}

export function BenefitsAboutUsMolecule({className, element}: Props) {
  return (
    <div className={className}>
      <IconAtom size={64} icon={element.icon} />

      <TextAtom className="mt-6 font-bold text-xl mb-2 text-black" text={element.title}> </TextAtom>

      <TextAtom className="text-[#878787]" text={element.bodyText}> </TextAtom>
    </div>
  )
}