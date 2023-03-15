import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

interface Props {
  color: string;
}

export function SocialMediaMolecule({ color }: Props) {
  return (
    <div className="flex justify-between items-center w-[100px]">
      <a
        target={"_blank"}
        href="https://www.facebook.com/clubedeferiasstellabarros"
      >
        <BsFacebook size={25} color={color} />
      </a>
      <a target={"_blank"} href="https://www.instagram.com/oclubedeferias/">
        <BsInstagram size={25} color={color} />
      </a>
      <a target={"_blank"} href="https://www.tiktok.com/@clubedeferias">
        <FaTiktok size={25} color={color} />
      </a>
    </div>
  );
}
