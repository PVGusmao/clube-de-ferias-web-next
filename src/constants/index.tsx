import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { TbPig } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import { IoIosArrowForward } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import api from "../services/api";

async function item() {
  const response = await api.get("/pages/home2");
  localStorage.setItem("texts", JSON.stringify(response));
}

item();

const data = JSON.parse(localStorage.getItem("texts"));

console.log(data);

const {
  content: {
    nav_links,
    home: homeData,
    text_button,
    socialMedia: socialMediaData,
    plans,
    clients,
    marks: marksData,
    card_blog,
    minor_card_blog,
    banner,
  },
} = data?.data;

export const navLinks = nav_links;

export const home = homeData;

export const textButtonWelcome = text_button;

export const planos = plans;

export const clientes = clients;

export const marks = marksData;

export const cardBlog = card_blog;

export const minorCardBlog = minor_card_blog;

export const bannerContent = banner;

export const cards = [
  {
    id: 1,
    icon: TbPig,
    content: data?.data?.content?.text_square1,
  },
  {
    id: 2,
    icon: AiOutlineSafety,
    content: data?.data?.content?.text_square2,
  },
  {
    id: 3,
    icon: BsTelephoneInboundFill,
    content: data?.data?.content?.text_square3,
  },
  {
    id: 4,
    icon: RiMoneyDollarCircleFill,
    content: data?.data?.content?.text_square4,
  },
];

export const navigation = [
  {
    icon: IoIosArrowForward,
    content: "Home",
  },
  {
    icon: IoIosArrowForward,
    content: "Planos",
  },
  {
    icon: IoIosArrowForward,
    content: "Blog",
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
