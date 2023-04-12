import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

import { IoIosArrowForward } from "react-icons/io";
import { SocialMediaMolecule } from "../moleculas/SocialMediaMolecule";

import logo from "../../public/logo.png";
import Image from "next/image";

export function FooterOrganism() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  const navigation = [
    {
      icon: IoIosArrowForward,
      content: "Home",
      route: "#home",
    },
    {
      icon: IoIosArrowForward,
      content: "Planos",
      route: "#planos",
    },
    {
      icon: IoIosArrowForward,
      content: "Blog",
      route: "#blog",
    },
  ];

  return (
    <div className="sm:w-full flex items-center flex-col justify-center bg-[#F20F0F]">
      <div className="sm:h-[16.313rem] sm:w-[1280px] bg-[#F20F0F] sm:flex sm:flex-row flex-col px-12 sm:justify-between py-12 sm:items-center">
        <div className="justify-items-start grid sm:w-96 h-full mb-12">
          <div className="justify-start">
            <a href=".">
              <Image className="w-36" src={logo} alt="logo" />
            </a>
          </div>
          <TextAtom
            children
            className="text-left mb-7 text-base font-light text-white"
            text={`© ${anoAtual} Clube de Férias Stella Barros Turismo 
            Todos os direitos reservados`}
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-between sm:w-[42rem] content-center h-full  ">
          <div className="grid sm:mb-0 mb-12	">
            <TextAtom
              children
              className="font-bold text-left text-white text-2xl mb-3.5"
              text="Navegação"
            />
            {navigation.map((element, index: number) => (
              <div key={index} className="flex flex-row mb-4">
                <a className="flex justify-center items-center" href={element.route}>
                  <IconAtom
                    icon={element.icon}
                    size={20}
                    color="white"
                    className="mr-1"
                  />
                  <TextAtom
                    children
                    text={element.content}
                    className="text-white"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:w-80	">
            <TextAtom
              children
              className="font-bold text-white text-left text-[16px] text-2xl mb-8	"
              text="Siga nossas redes"
            />
            <SocialMediaMolecule color="white" />
          </div>
        </div>
      </div>
      <div className="h-[15px] w-full bg-[#636363] flex justify-center items-center ">
        <TextAtom
          children
          className="text-[13px] font-bold text-white"
          text=""
        />
      </div>
    </div>
  );
}
