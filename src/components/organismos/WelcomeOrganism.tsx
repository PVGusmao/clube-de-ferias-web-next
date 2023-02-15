import { home } from "../../constants";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";
import { WelcomeMolecule } from "../moleculas/WelcomeMolecule";

type Props = {
  data?: any;
}

export function WelcomeOrganism({data}: Props) {
  return (
    <>
      <BackgroundImageAtom image={data?.data?.paulo?.home?.image} className={`h-128 sm:max-w-7xl`}>
        <WelcomeMolecule data={data} className="w-full" />
      </BackgroundImageAtom>
    </>
  );
}
