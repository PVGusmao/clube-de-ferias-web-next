import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import Link from "next/link";

import { TextAtom } from "./TextAtom";

import { SocialMediaMolecule } from "../moleculas/SocialMediaMolecule";
import { IMyContext, MyContext } from "@/context/MyContext";

type Props = {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  showMenu: boolean;
};

export default function Sidebar({ setShowMenu, showMenu }: Props) {
  const { setLoading } = useContext(MyContext) as IMyContext;
  
  useEffect(() => {
    setLoading(true);
  })
  
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col h-[100%] shadow w-full bg-[#F20F0F]">
        <div className="space-y-3 flex h-[100%] flex-col bg-[#F20F0F]">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm my-[100px] h-[250px] flex flex-col justify-between items-center">
              <li className="rounded-sm">
                <Link
                  href="/sobre"
                  className="flex items-center text-white p-2 space-x-3 rounded-md"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <span className="text-lg font-bold">Quem somos</span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  href="/#simulador"
                  className="flex items-center text-white p-2 space-x-3 rounded-md"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <span className="text-lg font-bold">Simule sua viagem</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/blog"
                  className="flex items-center text-white p-2 space-x-3 rounded-md"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <span className="text-lg font-bold">Blog</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/fale-conosco"
                  className="flex items-center text-white p-2 space-x-3 rounded-md"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <span className="text-lg font-bold">Fale Conosco</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <SocialMediaMolecule color="white" />
          <a
            href="#baixe-o-app"
            className="mt-[50px]"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <TextAtom
              text="Baixe o App"
              className="text-white font-bold text-xl border-2 p-2 rounded-xl mb-4"
            >
              Baixe o App
            </TextAtom>
          </a>
        </div>
      </div>
    </div>
  );
}
