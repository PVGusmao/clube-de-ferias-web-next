import { IconType } from "react-icons";

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
