import { createContext, useState } from 'react';

export type IMyContext = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<IMyContext | null>(null);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{
      showMenu, setShowMenu,
    }}>
      {children}
    </MyContext.Provider>
  );
}