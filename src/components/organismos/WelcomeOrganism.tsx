import { home } from "../../constants";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";
import { WelcomeMolecule } from "../moleculas/WelcomeMolecule";

export function WelcomeOrganism() {
  return (
    <>
      <BackgroundImageAtom image={home.image} className={`h-128 sm:max-w-7xl`}>
        <WelcomeMolecule className="w-full" />
      </BackgroundImageAtom>
    </>
  );
}
