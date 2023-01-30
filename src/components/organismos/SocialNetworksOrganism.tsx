import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";

export function SocialNetworksOrganism() {
  return (
    <div className="flex items-center mt-4 ">
      <p className="mr-3">Nossas redes: </p>
      <div className="flex justify-between ">
        <FaTiktok className="mr-2" size={20} />
        <IoLogoFacebook className="mr-2" size={25} />
        <IoLogoInstagram className="mr-2" size={25} />
      </div>
    </div>
  );
}
