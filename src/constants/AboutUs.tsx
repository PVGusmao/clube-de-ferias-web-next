import { IconType } from "react-icons"
import { MdCardTravel } from "react-icons/md"

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
    route: '/sobre/#blog',
    title: 'Blog',
  },
  {
    id: 'Fale Conosco',
    route: '/sobre/#fale-conosco',
    title: 'Fale Conosco',
  },
  {
    id: 'Baixe o App',
    route: '/sobre/#download',
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