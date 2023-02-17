import { createContext, useState } from 'react';
import { CardRecentsPostsInterface } from '../components/moleculas/CardRecentsPosts';
import { CardSimulationProps } from '../components/moleculas/CardSimulationMolecule';
import { HeadeBlogPostOrganismInterface } from '../components/organismos/HeadeBlogPostOrganism';
import { AboutUsTextsInterface } from '../constants/AboutUs';
import { FeaturedAndPostInterface } from '../constants/Blog';

export type IMyContext = {
  showMenu: boolean;
  data: HeadeBlogPostOrganismInterface;
  recents: CardRecentsPostsInterface[];
  link: string;
  packages: CardSimulationProps[];
  allSiteTexts: undefined;
  aboutUsTexts: AboutUsTextsInterface;
  blogPostsContent: FeaturedAndPostInterface[];
  blogFeaturedContent: FeaturedAndPostInterface[];
  location: string;
  setRecents: React.Dispatch<React.SetStateAction<CardRecentsPostsInterface[]>>;
  setData: React.Dispatch<React.SetStateAction<HeadeBlogPostOrganismInterface>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  setPackages: React.Dispatch<React.SetStateAction<CardSimulationProps[]>>;
  setAboutUsTexts: React.Dispatch<React.SetStateAction<AboutUsTextsInterface>>;
  setAllSiteTexts: React.Dispatch<React.SetStateAction<undefined>>;
  setBlogPostsContent: React.Dispatch<React.SetStateAction<FeaturedAndPostInterface[]>>;
  setBlogFeaturedContent: React.Dispatch<React.SetStateAction<FeaturedAndPostInterface[]>>;
}

export const MyContext = createContext<IMyContext | null>(null);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [link, setLink] = useState<string>('');
  const [packages, setPackages] = useState<CardSimulationProps[]>([]);
  const [allSiteTexts, setAllSiteTexts] = useState<undefined>(undefined);
  const [aboutUsTexts, setAboutUsTexts] = useState<AboutUsTextsInterface>();
  const [blogPostsContent, setBlogPostsContent] = useState<FeaturedAndPostInterface>();
  const [blogFeaturedContent, setBlogFeaturedContent] = useState<FeaturedAndPostInterface>();
  const [location, setLocation] = useState<string>('');
  const [recents, setRecents] = useState<CardRecentsPostsInterface[]>([]);
  const [data, setData] = useState<HeadeBlogPostOrganismInterface>({
    capa: '',
    title: '',
    subtitle: '',
    img: ''
  });

  return (
    <MyContext.Provider value={{
      showMenu, setShowMenu,
      recents, setRecents,
      link, setLink,
      packages, setPackages,
      allSiteTexts, setAllSiteTexts,
      location, setLocation,
      data, setData,
      aboutUsTexts, setAboutUsTexts,
      blogPostsContent, setBlogPostsContent,
      blogFeaturedContent, setBlogFeaturedContent,
    } as unknown as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}