import {
  FaFacebook,
  FaInstagram,
  FaRegBuilding,
  FaRegComments,
  FaTiktok,
} from "react-icons/fa";

import { TbPig } from "react-icons/tb";
import { MdEmail, MdOutlineMonetizationOn } from "react-icons/md";
import { HiLocationMarker, HiOutlineBadgeCheck } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";

import api from "../services/api";
import { IconType } from "react-icons";

async function item() {
  const response = await api.get("/pages");
  localStorage.setItem("home", JSON.stringify(response));
}

item();

const data = JSON.parse(localStorage.getItem("home"));

const {
  nav_links,
  home: homeData,
  text_button,
  plans2,
  clients,
  marks: marksData,
  card_blog,
  minor_card_blog,
  banner,
  banners,
  sub_plans_text,
} = data?.data?.paulo;

export const { mobile, desktop } = banners;

export const navLinks = nav_links;

export const home = homeData;

export const textButtonWelcome = text_button;

export const planos2 = [
  {
    id: 1,
    planName: plans2[0]?.planName,
    firstIcon: GiCommercialAirplane,
    firstText: plans2[0]?.firstText,
    discount: plans2[0]?.discount,
    discountText: plans2[0]?.discountText,
    thirdIcon: TbPig,
    thirdText: plans2[0]?.thirdText,
    fourthIcon: FaRegBuilding,
    fourthText: plans2[0]?.fourthText,
    priceTag: plans2[0]?.priceTag,
    buttonName: plans2[0]?.buttonName,
    colorPlan: plans2[0]?.colorPan,
  },
  {
    id: 2,
    planName: plans2[1]?.planName,
    firstIcon: GiCommercialAirplane,
    firstText: plans2[1]?.firstText,
    discount: plans2[1]?.discount,
    discountText: plans2[1]?.discountText,
    thirdIcon: TbPig,
    thirdText: plans2[1]?.thirdText,
    fourthIcon: FaRegBuilding,
    fourthText: plans2[1]?.fourthText,
    priceTag: plans2[1]?.priceTag,
    buttonName: plans2[1]?.buttonName,
    colorPlan: plans2[1]?.colorPlan,
  },
  {
    id: 3,
    planName: plans2[2]?.planName,
    firstIcon: GiCommercialAirplane,
    firstText: plans2[2]?.firstText,
    discount: plans2[2]?.discount,
    discountText: plans2[2]?.discountText,
    thirdIcon: TbPig,
    thirdText: plans2[2]?.thirdText,
    fourthIcon: FaRegBuilding,
    fourthText: plans2[2]?.fourthText,
    priceTag: plans2[2]?.priceTag,
    buttonName: plans2[2]?.buttonName,
    colorPlan: plans2[2]?.colorPlan,
  },
  {
    id: 4,
    planName: plans2[3]?.planName,
    firstIcon: GiCommercialAirplane,
    firstText: plans2[3]?.firstText,
    discount: plans2[3]?.discount,
    discountText: plans2[3]?.discountText,
    thirdIcon: TbPig,
    thirdText: plans2[3]?.thirdText,
    fourthIcon: FaRegBuilding,
    fourthText: plans2[3]?.fourthText,
    priceTag: plans2[3]?.priceTag,
    buttonName: plans2[3]?.buttonName,
    colorPlan: plans2[3]?.colorPlan,
  },
];

export const clientes = clients;

export const marks = marksData;

export const cardBlog = card_blog;

export const minorCardBlog = minor_card_blog;

export const bannerContent = banner;

export const cards = [
  {
    id: 1,
    icon: TbPig,
    content: data?.data?.paulo?.text_square?.text_1,
  },
  {
    id: 2,
    icon: HiOutlineBadgeCheck,
    content: data?.data?.paulo?.text_square?.text_2,
  },
  {
    id: 3,
    icon: FaRegComments,
    content: data?.data?.paulo?.text_square?.text_3,
  },
  {
    id: 4,
    icon: MdOutlineMonetizationOn,
    content: data?.data?.paulo?.text_square?.text_4,
  },
];

export interface Navigation {
  icon: IconType;
  content: string;
  route: string;
}

export const navigation = [
  {
    icon: IoIosArrowForward,
    content: "Home",
    route: "#home",
  },
  {
    icon: IoIosArrowForward,
    content: "Planos",
    route: "#planos",
  },
  {
    icon: IoIosArrowForward,
    content: "Blog",
    route: "#blog",
  },
];

export const socialMedia = [
  {
    id: "instagram",
    icon: FaInstagram,
    rota: "/instagram",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    rota: "/facebook",
  },
  {
    id: "tik-tok",
    icon: FaTiktok,
    rota: "/tik-tok",
  },
];

export const contato = [
  {
    icon: HiLocationMarker,
    content: "Lumbung Hidup East Java",
  },
  {
    icon: MdEmail,
    content: "Hello@Homco.com",
  },
];

export const clubPost = [
  {
    subTitle: "Perfect | Tips",
    title: "Travel Stories For Now and the Future",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    subTitle: "Perfect | Tips",
    title: "Travel Stories For Now and the Future",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    subTitle: "Perfect | Tips",
    title: "Travel Stories For Now and the Future",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    subTitle: "Perfect | Tips",
    title: "Travel Stories For Now and the Future",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    subTitle: "Perfect | Tips",
    title: "Travel Stories For Now and the Future",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

export const clubTopPost = [
  {
    title: "Mais lidos | Tips",
    subtitle: "O que levar para as viagens?",
    text: "Como já falamos por aqui, planejar a sua viagem com antecedência é essencial para que você possa aproveitar ao máximo cada segundo no seu destino",
  },
  {
    title: "Mais lidos | Tips",
    subtitle: "O que levar para as viagens?",
    text: "Como já falamos por aqui, planejar a sua viagem com antecedência é essencial para que você possa aproveitar ao máximo cada segundo no seu destino",
  },
];

export const headerPost = [
  {
    subtitle: "Home/Blog",
    title: "Dicas Inesqueciveis",
    text: "Descubra o que fazer em qualquer lugar do mundo!",
  },
  {
    subtitle: "Home/Blog",
    title: "Dicas Inesqueciveis",
    text: "Descubra o que fazer em qualquer lugar do mundo!",
  },
  {
    subtitle: "Home/Blog",
    title: "Dicas Inesqueciveis",
    text: "Descubra o que fazer em qualquer lugar do mundo!",
  },
];

export const subPlanText = sub_plans_text;
