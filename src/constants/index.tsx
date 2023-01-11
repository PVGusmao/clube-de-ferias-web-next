import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { TbPig } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import firstButtonBlog from "../assets/firstButtonBlog.png";
import secondButtonBlog from "../assets/secondButtonBlog.png";
import thirdButtonBlog from "../assets/thirdButtonBlog.png";
import forthButtonBlog from "../assets/forthButtonBlog.png";

import { IoIosArrowForward } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import api from "../services/api";

async function item() {
  const response = await api.get('/pages/Home');
  localStorage.setItem("texts", JSON.stringify(response)); 
}

item();

const data = JSON.parse(localStorage.getItem("texts"));

const { page: { content: { nav_links, home: homeData, text_button,
  plans, clients, marks: marksData, card_blog } } } = data?.data;

export const navLinks = nav_links;

export const home = homeData;

export const textButtonWelcome = text_button;

export const planos = plans; 

export const clientes = clients;

export const marks = marksData;

export const cardBlog = card_blog;

export const cards = [
  {
    id: 1,
    icon: TbPig,
    content: data?.data?.page?.content?.text_square1,
  },
  {
    id: 2,
    icon: AiOutlineSafety,
    content: data?.data?.page?.content?.text_square2,
  },
  {
    id: 3,
    icon: BsTelephoneInboundFill,
    content: data?.data?.page?.content?.text_square3,
  },
  {
    id: 4,
    icon: RiMoneyDollarCircleFill,
    content: data?.data?.page?.content?.text_square4,
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

export const minorCardBlog = [
  {
    id: 1,
    title: "Lugares Imperdíveis",
    image: firstButtonBlog,
  },
  {
    id: 2,
    title: "Não Perca",
    image: secondButtonBlog,
  },
  {
    id: 3,
    title: "Retrospectiva 2022",
    image: thirdButtonBlog,
  },
  {
    id: 4,
    title: "Carnaval",
    image: forthButtonBlog,
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
    rota: "/facebook"
  },
  {
    id: "tik-tok",
    icon: FaTiktok,
    rota: "/tik-tok"
  }
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
