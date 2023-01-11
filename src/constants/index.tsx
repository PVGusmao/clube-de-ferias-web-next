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
  console.log(response);
  localStorage.setItem("texts", JSON.stringify(response)); 
}

item();

const data = JSON.parse(localStorage.getItem("texts"));

console.log(data.data.paginas.content.title);

export const navLinks = [
  {
    id: "quem-somos",
    title: "Quem Somos",
    rota: "/sobre",
  },
  {
    id: "planos",
    title: "Planos",
    rota: "/#planos",
  },
  {
    id: "simule-sua-viagem",
    title: "Simule Sua Viagem",
    rota: "/#simulador"
  },
  {
    id: "blog",
    title: "Blog",
    rota: "/#blog",
  },
  {
    id: "fale-conosco",
    title: "Fale Conosco",
    rota: "/fale-conosco"
  },
  {
    id: "baixe-o-app",
    title: "Baixe O App",
    rota: "",
  },
];

export const cards = [
  {
    id: 1,
    icon: TbPig,
    content: data.data.paginas.content.textsquare1,
  },
  {
    id: 2,
    icon: AiOutlineSafety,
    content: data.data.paginas.content.textsquare2,
  },
  {
    id: 3,
    icon: BsTelephoneInboundFill,
    content: data.data.paginas.content.textsquare3,
  },
  {
    id: 4,
    icon: RiMoneyDollarCircleFill,
    content: data.data.paginas.content.textsquare4,
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

export const home = [
  {
    id: 1,
    subtitle: data.data.paginas.content.littletext,
    title: data.data.paginas.content.title,
    content: data.data.paginas.content.subtitle,
  },
];

export const textButtonWelcome = data.data.paginas.content.textbutton;

export const cardHotel = [
  {
    id: 1,
    title: "Maldivas",
    subtitle: "Hotel + Transfer",
    hotel: "Zagaia Eco Resort",
    data: "06 Abril à 10 de Abril 2023",
    price: "6x R$ 2.000",
  },
  {
    id: 1,
    title: "Maldivas",
    subtitle: "Hotel + Transfer",
    hotel: "Zagaia Eco Resort",
    data: "06 Abril à 10 de Abril 2023",
    price: "6x R$ 2.000",
  },
  {
    id: 1,
    title: "Maldivas",
    subtitle: "Hotel + Transfer",
    hotel: "Zagaia Eco Resort",
    data: "06 Abril à 10 de Abril 2023",
    price: "6x R$ 2.000",
  },
  {
    id: 1,
    title: "Maldivas",
    subtitle: "Hotel + Transfer",
    hotel: "Zagaia Eco Resort",
    data: "06 Abril à 10 de Abril 2023",
    price: "6x R$ 2.000",
  },
];

export const cardBlog = {
  id: 1,
  title: "Maldivas",
  subTitle: "Um paraíso possível!",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
};

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

export const planos = [
  {
    id: 1,
    plano: "SILVER",
    desconto: "6% OFF",
    content1: "em qualquer viagem do App!",
    content2: "Sua assinatura vira crédito para suas viagens",
    valor: "R$ 199/mês",
    btnColor: "bg-[#C0C0C0]",
  },
  {
    id: 2,
    plano: "GOLD",
    desconto: "8% OFF",
    content1: "em qualquer viagem do App!",
    content2: "Sua assinatura vira crédito para suas viagens",
    valor: "R$ 499/mês",
    btnColor: "bg-[#F6AB39]",
  },
  {
    id: 3,
    plano: "PLATINUM",
    desconto: "11% OFF",
    content1: "em qualquer viagem do App!",
    content2: "Sua assinatura vira crédito para suas viagens",
    valor: "R$ 999/mês",
    btnColor: "bg-[#636363]",
  },
  {
    id: 4,
    plano: "COPA 2026",
    desconto: "11% OFF",
    content1: "em qualquer viagem do App!",
    content2: "Sua assinatura vira crédito para suas viagens",
    valor: "R$ 999/mês",
    btnColor: "bg-[#11C801]",
  },
];

export const clientes = [
  {
    content:
      "Blood bank ds canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep screen violence joints symptoms x-ray yawn. Contagious cough diabetes mellitus...",
    name: "Felipe Nunes",
    ocupation: "Developer",
    img: "https://avatars.githubusercontent.com/u/81275678?v=4",
  },
  {
    content:
      "Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep screen violence joints symptoms x-ray yawn. Contagious cough diabetes mellitus...",
    name: "Felipe Nunes",
    ocupation: "Developer",
    img: "https://avatars.githubusercontent.com/u/81275678?v=4",
  },
  {
    content:
      "Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep screen violence joints symptoms x-ray yawn. Contagious cough diabetes mellitus...",
    name: "Felipe Nunes",
    ocupation: "Developer",
    img: "https://avatars.githubusercontent.com/u/81275678?v=4",
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

export const simulationCard = [
  {
    img: "https://avatars.githubusercontent.com/u/81275678?v=4",
    estado: "Salvador",
    modelo: "Hotel + Transer",
    hotel: "Zagaia Eco Resort",
    preco: "6x R$ 2.000",
  },
  {
    img: "https://avatars.githubusercontent.com/u/81275678?v=4",
    estado: "Salvador",
    modelo: "Hotel + Transer",
    hotel: "Zagaia Eco Resort",
    preco: "6x R$ 2.000",
  },
  {
    img: "https://avatars.githubusercontent.com/u/81275678?v=4",
    estado: "Salvador",
    modelo: "Hotel + Transer",
    hotel: "Zagaia Eco Resort",
    preco: "6x R$ 2.000",
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

export const marks = [
  {
    value: 6,
    label: "6 meses",
  },
  {
    value: 9,
    label: "9 meses",
  },
  {
    value: 12,
    label: "12 meses",
  },
  {
    value: 15,
    label: "15 meses",
  },
];

