import { Benefits } from "../../constants/AboutUs";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  className: string;
  element: Benefits;
};

export function BenefitsAboutUsMolecule({ className, element }: Props) {
  return (
    <div className={`${className} h-[270px]`}>
      <IconAtom size={64} icon={element.icon} color="gray" />

      <TextAtom
        children
        className="mt-6 font-bold text-xl mb-2 text-[red]"
        text={element.title}
      />

      <TextAtom children className="text-black" text={element.bodyText} />
    </div>
  );
}
