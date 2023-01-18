import { IconType } from "react-icons"
import { BsGraphUp } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md"
import { HiOutlineCheckBadge } from "react-icons/hi2"
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

export const navLinksAboutUs = [
  {
    id: 'Home',
    route: '/',
    title: 'Home',
  },
  {
    id: 'Planos',
    route: '/planos',
    title: 'Planos',
  },
  {
    id: 'Blog',
    route: '#blog',
    title: 'Blog',
  },
  {
    id: 'Fale Conosco',
    route: '/fale-conosco',
    title: 'Fale Conosco',
  },
  {
    id: 'Baixe o App',
    route: '#baixe-o-app',
    title: 'Baixe o App',
  }
]

export const headerTexts = [
  {
    title: 'Quem somos',
    subtitle: 'O Clúbe de Férias',
    body: 'Um aplicatico que conecta você com a sua próxima viagem',
  },
]

export const NewWayTravel = [
  {
    text1: 'Conheça um novo jeito de viajar, criado por quem entende do assunto',
    text2: 'Da casa de inovações da Stella Barros Turismo, empresa pioneira e com mais de 50 anos de atuação no turismo, nasce o Clube de Férias.',
    text3: 'É a credibilidade e tradição unida à inovação: Se prepare para uma experiência única em viagens, com muito mais liberdade de se planejar financeiramente, escolher destinos e realizar sonhos. Tudo isso de forma simples e intuitiva'    
  }
]

export interface PlansDescriptions {
  id: number;
  title: string;
  text: string;
  icon: IconType;
}

export const plansDescriptions = [
  {
    id: 1,
    title: '+Planejamento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
    icon: MdCardTravel,
  },
  {
    id: 2,
    title: '+Planejamento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
    icon: MdCardTravel,
  },
  {
    id: 3,
    title: '+Planejamento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
    icon: MdCardTravel,
  },
  {
    id: 4,
    title: '+Planejamento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
    icon: MdCardTravel,
  },
  {
    id: 5,
    title: '+Planejamento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
    icon: MdCardTravel,
  },
  {
    id: 6,
    title: '+Planejamento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
    icon: MdCardTravel,
  },
]

export interface Benefits {
  id: number;
  icon: IconType;
  title: string;
  bodyText: string;
}

export const benefits = [
  {
    id: 1,
    icon: HiOutlineCheckBadge,
    title: 'Praticidade',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor.'
  },
  {
    id: 2,
    icon: BsGraphUp,
    title: 'Planejamento',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor.'
  },
  {
    id: 3,
    icon: AiFillSafetyCertificate,
    title: 'Segurança',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor.'
  }
]

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
    route: "/planos",
  },
  {
    icon: IoIosArrowForward,
    content: "Blog",
    route: "#blog",
  },
];

export const bigComment = [
  {
    icon: FaQuoteLeft,
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor sapien et urna tincidunt fringilla. Vivamus at augue interdum, blandit arcu quis, laoreet ipsum.',
    text2: 'Mauris tempor tellus ante, ut fermentum erat gravida vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean nec justo dui. Ut et consequat dui, a malesuada ipsum.',
    author: 'Siti Sarah',
    authorSubtitle: 'Founder ipsum',
  }
]