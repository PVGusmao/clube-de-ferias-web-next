import { IconType } from "react-icons";
import { ContactInterface, SquaresInterface } from "./AboutUs";

export interface NavLinksInterface {
  id: string;
  route: string;
  title: string;
}

export interface ClientsInterface {
  content: string;
  img: string;
  name: string;
  travelTo:string;
}

export interface MinorCardBlogInterface {
  image: string;
  title: string;
}


export interface Navigation {
  icon: IconType;
  content: string;
  route: string;
}


export interface SocialMediaInterface {
  id: string;
  icon: IconType;
  rota: string;  
}

export interface BannerInterface {
  "big-text": string;
  enable: boolean;
  id: number;
  image: string;
  text: string;
  "txt-btn": string;
}

export interface Banners {
  desktop: string;
  mobile: string;
}

export interface CardBlogInterface {
  image: string;
  message: string;
  subtitle: string;
  title: string;
}

export interface HomeInterface {
  content: string;
  id: number;
  image: string;
  image_video: string;
  subtitle: string;
  title: string;
  video: string;
}

export interface MarksInterface {
  value: number;
}

export interface PlansInterface {
  btn_color: string;
  content1: string;
  content2: string;
  discount: string;
  plan: string;
  value: string;
}

export interface Plans2Interface {
  planName: string;
  firstIcon: string;
  firstText: string;
  discount: number;
  discountText: string;
  thirdIcon: string;
  thirdText: string;
  fourthIcon: string;
  fourthText: string;
  priceTag: number;
  buttonName: string;
  colorPlan: string;
  fifthText: string;
}

export interface SubPlanTextInterface {
  text1: string;
  text2: string;
  text3: string;
}

export interface IPaulo {
  banner: BannerInterface[],
  banners: Banners,
  card_blog: CardBlogInterface, 
  clients: ClientsInterface[], 
  contact: ContactInterface, 
  home: HomeInterface, 
  marks: MarksInterface[], 
  minor_card_blog: MinorCardBlogInterface[], 
  nav_links: NavLinksInterface[], 
  plans: PlansInterface, 
  plans2: Plans2Interface, 
  socialMedia: SocialMediaInterface, 
  sub_plans_text: SubPlanTextInterface[], 
  text_button: string, 
  text_square: SquaresInterface, 

}
