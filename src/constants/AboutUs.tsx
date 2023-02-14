import { IconType } from "react-icons"
import { TbMountain } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md"
import { TfiMedallAlt } from "react-icons/tfi";
import { HiOutlineCheckBadge } from "react-icons/hi2"
import { AiFillSafetyCertificate, AiOutlinePlus, AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsFillPersonFill, BsGraphUp, BsMap } from "react-icons/bs";
import { IoIosArrowForward, IoIosPeople } from "react-icons/io";

import api from "../services/api";
import { IoMedalOutline } from "react-icons/io5";

async function item() {
  const response = await api.get('/pages');
  localStorage.setItem("about", JSON.stringify(response));
}

async function item2() {
  const response = await api.get('/pages/quemsomos');
  localStorage.setItem("about2", JSON.stringify(response));
}

item();
item2();

const data = JSON.parse(localStorage.getItem("about"));
const data2 = JSON.parse(localStorage.getItem("about2"));

const {
  benefits: ben,
  navigation: nav,
  newWayTravel,
  bigComment: bc,
  headerTexts: ht,
  plansDescriptions: pd,
  statistics: st
} = data?.data?.sobre

const {
  client,
  contact,
  first_section,
  header,
  landscape_card_blog,
  mid_section,
  minor_card_blog,
  nav_links,
  portrait_card_blog,
  socialMedia,
  squares,
  stellaBranding
} = data2?.data?.content;



export const headerTexts = header;

export const NewWayTravel = first_section;

export interface PlansDescriptions {
  id: number;
  title: string;
  text: string;
  icon: IconType;
}

export const plansDescriptions = 
[
  {
    id: 1,
    title: pd[0].title,
    text: pd[0].text,
    icon: MdCardTravel,
  },
  {
    id: 2,
    title: pd[1].title,
    text: pd[1].text,
    icon: MdCardTravel,
  },
  {
    id: 3,
    title: pd[2].title,
    text: pd[2].text,
    icon: MdCardTravel,
  },
  {
    id: 4,
    title: pd[3].title,
    text: pd[3].text,
    icon: MdCardTravel,
  },
  {
    id: 5,
    title: pd[4].title,
    text: pd[4].text,
    icon: MdCardTravel,
  },
  {
    id: 6,
    title: pd[5].title,
    text: pd[5].text,
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
    icon: BsMap,
    title: squares[0].title,
    bodyText: squares[0].subtitle
  },
  {
    id: 2,
    icon: AiOutlineSafetyCertificate,
    title: squares[1].title,
    bodyText: squares[1].subtitle
  },
  {
    id: 3,
    icon: IoMedalOutline,
    title: squares[2].title,
    bodyText: squares[2].subtitle
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
    content: nav[0].content,
    route: nav[0].route,
  },
  {
    icon: IoIosArrowForward,
    content: nav[1].content,
    route: nav[1].route,
  },
  {
    icon: IoIosArrowForward,
    content: nav[2].content,
    route: nav[2].route,
  },
];

export const bigComment = [
  {
    icon: FaQuoteLeft,
    text1: client?.content,
    image: client?.img,
    author: client?.name,
    authorSubtitle: client?.travelTo,
  }
]

export interface Statistics {
  data: string;
  icon: IconType;
  dataType: string;
  iconTopRight: IconType;
}

export const statistics = [
  {
    data: st[0].data,
    icon: IoIosPeople,
    dataType: st[0].dataType,
    iconTopRight: AiOutlinePlus,
  },
  {
    data: st[1].data,
    icon: BsFillPersonFill, 
    dataType: st[1].dataType,
    iconTopRight: AiOutlinePlus,
  },
  {
    data: st[2].data,
    icon: TbMountain, 
    dataType: st[2].dataType,
    iconTopRight: AiOutlinePlus,
  },
  {
    data: st[3].data,
    icon: TfiMedallAlt, 
    dataType: st[3].dataType,
    iconTopRight: AiOutlinePlus,
  }
]

export const midSection = mid_section;

export const stellaBarros = stellaBranding;
