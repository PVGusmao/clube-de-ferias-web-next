import { TextAtom } from "../atomos/TextAtom";
import { TablePlansAboutUsMolecule } from "../moleculas/TablePlansAboutUsMolecule";

import image from '../../assets/aboutusComoFuncionaImage.png';
import { ImageAtom } from "../atomos/ImageAtome";
import { IconAtom } from "../atomos/IconAtom";
import { IoAirplaneSharp } from "react-icons/io5";

export function HowItWorksAboutUsOrganism() {
  return (
    <div className="bg-[#E00718] w-full h-[900px] relative">

      <div className="h-[33px] w-[752px] m-auto border-b-2 border-b-white border-r-2 border-r-white rounded-br-2xl" />
      
      <IconAtom
        className="absolute rotate-180 left-[210px] top-[10px]"
        icon={IoAirplaneSharp}
        size={42}
        color='white'
      />

      <ImageAtom
        source={image}
        alt='fotos telefone ilustrativa'
        className="absolute right-[77px] top-[136px]"
      />

      <div className="flex items-start flex-col mx-[175px] mt-[50px]">
        <TextAtom
          className="text-[50px] text-white font-bold leading-[120%]"
          text="Como functiona?"
        > </TextAtom>

        <TextAtom
          className="text-[25px] text-white font-medium leading-[120%] mt-[11px]"
          text="É simples!"
        > </TextAtom>

        <TextAtom
          className="text-[20px] text-white font-medium leading-[180%] mt-[33px]"
          text="1. Baixe o aplicativo!"
        > </TextAtom>

        <TextAtom
          className="text-[20px] text-white font-medium leading-[180%]"
          text="2. Cadastre-se!"
        > </TextAtom>

        <TextAtom
          className="text-[20px] text-white font-medium leading-[180%]"
          text="3. Escolha o plano"
        > </TextAtom>

        <TextAtom
          className="text-[30px] text-white font-bold leading-[120%] mt-[53px]"
          text="É fácil e prático!"
        > </TextAtom>

        <TextAtom
          className="text-[18px] text-white font-medium leading-[180%] mt-[7px]"
          text="Você escolhe o seu plano e a sua"
        > </TextAtom>

        <TextAtom
          className="text-[18px] text-white font-medium leading-[180%]"
          text="assinatura vira crédito para ir onde e quando quiser."
        > </TextAtom>

        <TablePlansAboutUsMolecule />

        <div className="mt-[11px] flex justify-between w-[479px]">
        <TextAtom
          className="text-[18px] text-white font-medium leading-[159%]"
          text="+ Praticidade"
        > </TextAtom>

        <TextAtom
          className="text-[18px] text-white font-medium leading-[159%]"
          text="+ Planejamento"
        > </TextAtom>

        <TextAtom
          className="text-[18px] text-white font-medium leading-[159%]"
          text="+ Descontos Exclusivos"
        > </TextAtom>
        </div>

        <TextAtom
          className="text-[30px] mt-[38px] text-white font-medium leading-[120%]"
          text="E aí, bora com o Clube?"
        > </TextAtom>

      </div>
    </div>
  )
}