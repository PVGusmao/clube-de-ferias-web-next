import { SocialMediaInterface } from ".";
import { ClientInterface } from "@/components/moleculas/CardCommentsMolecule";

export interface ContactInterface {
  content: string;
  icon: string;
}

export interface FirstSectionInterface {
  subtitle_1: string;
  subtitle_2: string;
  subtitle_3: string;
  title: string;
}

export interface HeaderInterface {
  content: string;
  image: string;
  logo: string;
  subtitle: string;
  title: string;
}

export interface LandscapeCardBlogInterface {
  image: string;
  title: string;
}

export interface PlansInterface {
  btn_color: string;
  discount: string;
  plan: string;
  value: string;
  id: number;
}

export interface StepsInterface {
  id: number;
  text: string;
}

export interface MidSectionInterface {
  big_title: string;
  last_text: string;
  mid_subtitle1: string;
  mid_subtitle2: string;
  mid_title: string;
  subtitle: string;
  plans: PlansInterface[];
  steps: StepsInterface[];
}

export interface MinorCardBlogInterface {
  id: number;
  image: string;
  title: string;
}

export interface NavLinksInterface {
  id: string;
  route: string;
  title: string;
}

export interface PortraitCardBlogInterface {
  image: string;
  title: string;
}

export interface SquaresInterface {
  icon: string;
  id: number;
  subtitle: string;
  title: string;
}

export interface StellaBrandingInterface {
  firstText: string;
  name: string;
  secondText: string;
}

export interface BenefitsInterface {
  photo_url: string;
}

export interface AboutUsTextsInterface {
  benefits: BenefitsInterface[];
  client: ClientInterface;
  contact: ContactInterface;
  first_section: FirstSectionInterface;
  header: HeaderInterface;
  landscape_card_blog: LandscapeCardBlogInterface;
  mid_section: MidSectionInterface;
  minor_card_blog: MinorCardBlogInterface[];
  nav_links: NavLinksInterface[];
  portrait_card_blog: PortraitCardBlogInterface;
  socialMedia: SocialMediaInterface;
  squares: SquaresInterface[];
  StellaBranding: StellaBrandingInterface;
}
