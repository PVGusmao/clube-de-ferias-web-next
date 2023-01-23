//a index.ts é a HOME.

import { FaFacebook, FaInstagram, FaRegBuilding, FaTiktok } from "react-icons/fa";

import { TbPig } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import api from "../services/api";
import { IconType } from "react-icons";

async function item() {

  const response = await api.get('/pages');
  localStorage.setItem("home", JSON.stringify(response));
}

item();

const data = JSON.parse(localStorage.getItem("home"));

const { nav_links, home: homeData, text_button, socialMedia: socialMediaData,
  plans, clients, marks: marksData, card_blog, minor_card_blog, banner } = data?.data?.paulo;

  
export const navLinks = nav_links;

export const home = homeData;

export const textButtonWelcome = text_button;

export const planos = plans;

export const planos2 = [
  {
    id: 1,
    planName: 'Silver',
    firstIcon: GiCommercialAirplane,
    firstText: 'Ideal para quem planeja viagens semestrais ou anuais',
    discount: 6,
    discountText: 'de desconto na compra de Pacotes.',
    thirdIcon: TbPig,
    thirdText: 'sua mensalidade vira crédito para sua viagem',
    fourthIcon: FaRegBuilding,
    fourthText: 'você ainda garante 6% de desconto nos pacotes de hotelaria.',
    priceTag: 199,
    buttonName: 'Associe-se',
    colorPlan: '#B8B8B8',
  },
  {
    id: 2,
    planName: 'Gold',
    firstIcon: GiCommercialAirplane,
    firstText: 'Ideal para quem planeja viagens semestrais ou anuais',
    discount: 8,
    discountText: 'de desconto na compra de Pacotes.',
    thirdIcon: TbPig,
    thirdText: 'sua mensalidade vira crédito para sua viagem',
    fourthIcon: FaRegBuilding,
    fourthText: 'você ainda garante 6% de desconto nos pacotes de hotelaria.',
    priceTag: 499,
    buttonName: 'Associe-se',
    colorPlan: '#F6AB39',
  },
  {
    id: 3,
    planName: 'Platinum',
    firstIcon: GiCommercialAirplane,
    firstText: 'Ideal para quem planeja viagens semestrais ou anuais',
    discount: 11,
    discountText: 'de desconto na compra de Pacotes.',
    thirdIcon: TbPig,
    thirdText: 'sua mensalidade vira crédito para sua viagem',
    fourthIcon: FaRegBuilding,
    fourthText: 'você ainda garante 6% de desconto nos pacotes de hotelaria.',
    priceTag: 999,
    buttonName: 'Associe-se',
    colorPlan: '#515151',
  },
  {
    id: 4,
    planName: 'Promo',
    firstIcon: GiCommercialAirplane,
    firstText: 'Ideal para quem planeja viagens semestrais ou anuais',
    discount: 11,
    discountText: 'de desconto na compra de Pacotes.',
    thirdIcon: TbPig,
    thirdText: 'sua mensalidade vira crédito para sua viagem',
    fourthIcon: FaRegBuilding,
    fourthText: 'você ainda garante 6% de desconto nos pacotes de hotelaria.',
    priceTag: 999,
    buttonName: 'Associe-se',
    colorPlan: '#3F9D3A',
  },
] 

export const clientes = clients;

export const marks = marksData;

export const cardBlog = card_blog;

export const minorCardBlog = minor_card_blog;

export const bannerContent = banner;

export const cards = [
  {
    id: 1,
    icon: TbPig,
    content: data?.data?.content?.text_square?.text_1,
  },
  {
    id: 2,
    icon: AiOutlineSafety,
    content: data?.data?.content?.text_square?.text_2,
  },
  {
    id: 3,
    icon: BsTelephoneInboundFill,
    content: data?.data?.content?.text_square?.text_3,
  },
  {
    id: 4,
    icon: RiMoneyDollarCircleFill,
    content: data?.data?.content?.text_square?.text_4,
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
