import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";

type Props = {
  data: any;
}

export function BannerOrganism({ data }: Props) {
  return (
    <div className="mx-[10px] mb-32">
      <BackgroundImageAtom
        children
        image={data.data.paulo.banners.desktop}
        backgroundSize={"100%"}
        className="hidden sm:flex h-48 rounded-2xl my-[10px] bg-cover"
      />
      <BackgroundImageAtom
        children
        image={data.data.paulo.banners.mobile}
        className="sm:hidden h-[252px] rounded-2xl bg-cover"
      />
    </div>
  );
}
