import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";
import { desktop, mobile } from "../../constants/Home";

type Props = {
  data: any;
}

export function BannerOrganism({ data }: Props) {
  return (
    <div className="mx-[10px]">
      <BackgroundImageAtom
        children
        image={data.data.paulo.banners.desktop}
        backgroundSize={"100%"}
        className="hidden sm:flex h-48 rounded-2xl my-[141px] bg-cover"
      />
      <BackgroundImageAtom
        children
        image={data.data.paulo.banners.mobile}
        className="sm:hidden h-[252px] rounded-2xl bg-cover"
      />
    </div>
  );
}
