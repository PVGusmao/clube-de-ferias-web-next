import { createContext, useState } from 'react';

export type IMyContext = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<IMyContext | null>(null);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [link, setLink] = useState<string>('');

  return (
    <MyContext.Provider value={{
      showMenu, setShowMenu,
      link, setLink,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}