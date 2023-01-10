import { createContext, useState } from 'react';
import { CardSimulationProps } from '../components/moleculas/CardSimulationMolecule';

export type IMyContext = {
  showMenu: boolean;
  link: string;
  packages: CardSimulationProps[];
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  setPackages: React.Dispatch<React.SetStateAction<CardSimulationProps[]>>;
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

  return (
    <MyContext.Provider value={{
      showMenu, setShowMenu,
      link, setLink,
      packages, setPackages,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}