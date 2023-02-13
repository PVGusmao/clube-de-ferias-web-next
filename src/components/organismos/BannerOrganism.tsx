import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";
import { desktop, mobile } from "../../constants";

export function BannerOrganism() {
  return (
    <>
      <BackgroundImageAtom
        children
        image={desktop}
        backgroundSize={"100%"}
        className="hidden sm:flex h-48 rounded-2xl my-[141px] bg-cover"
      />
      <BackgroundImageAtom
        children
        image={mobile}
        className="sm:hidden h-[240px] rounded-2xl bg-contain"
      />
    </>
  );
}
