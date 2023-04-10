import { ButtonMolecule } from "../moleculas/ButtonMolecule";
import { TextAtom } from "../atomos/TextAtom";
import { Checkbox, Input } from "@mui/material";

import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { IconAtom } from "../atomos/IconAtom";
import { ImageAtom } from "../atomos/ImageAtome";

import QRCODE from "../../assets/QRCodeApp.png";

export function NewsOrganism() {
  return (
    <div
      id="baixe-o-app"
      className="sm:flex grid content-center mt-[100px] h-[1000px] sm:h-[25.5rem] sm:h-[35.5rem] w-full justify-evenly bg-[#F3F3F3]"
    >
      <div className="grid content-center mt-[50px]">
        <TextAtom
          children
          className="sm:text-5xl text-3xl	font-bold text-[#F20F0F] sm:text-left"
          text="Quer saber mais sobre"
        />
        <TextAtom
          children
          className="sm:text-5xl text-3xl	font-bold text-[#F20F0F] sm:text-left mb-5"
          text="o clube de Férias?"
        />
        <TextAtom
          children
          className="font-light	sm:text-left sm:text-2xl text-black"
          text="Assine nossa news e receba"
        />
        <TextAtom
          children
          className="font-light	sm:text-left sm:text-2xl text-black"
          text="novidades toda semana"
        />

        <div className="flex flex-col my-10">
          <p className="text-left mb-[20px] text-[20px] text-black font-bold mx-[10px] sm:mx-0 ">
            Baixe nosso aplicativo clicando abaixo.
          </p>
          <div className="flex flex-row">
            <a target="_blank" href="https://apps.apple.com/us/app/clube-de-f%C3%A9rias/id1627026529">
              <div className="flex h-[3.4375rem] w-[10.75rem] mb-5 bg-[#252525] items-center justify-center rounded-lg mr-5">
                <IconAtom
                  icon={AiFillApple}
                  size={30}
                  color="white"
                  className="mb-2"
                />
                <TextAtom
                  children
                  className="text-white ml-2 font-bold"
                  text="Apple Store"
                />
              </div>
            </a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.stellabarros.clubedeferias">
              <div className="flex h-[3.4375rem] w-[11rem] mb-5 bg-[#252525] items-center justify-center rounded-lg">
                <IconAtom
                  icon={FaGooglePlay}
                  size={30}
                  color="white"
                  className=""
                />
                <TextAtom
                  children
                  className="text-white ml-2 font-bold"
                  text="Google Play"
                />
              </div>
            </a>
          </div>
          <p className="text-left mb-[20px] text-[20px] text-black font-bold mx-[10px] sm:mx-0">
            Ou utilizando nosso QR Code
          </p>
          <div className="flex">
            <ImageAtom
              className="w-[120px] justify-center "
              alt="qr code loja app"
              source={QRCODE}
            />
          </div>
        </div>
      </div>
      <div className="flex  items-center flex-col justify-center">
        <Input
          placeholder="Nome"
          className="bg-[#D9D9D98A] w-[19.875rem] sm:w-[29.375rem] rounded-full p-3 mb-4"
          disableUnderline
        />
        <Input
          placeholder="Email"
          className="bg-[#D9D9D98A] w-[19.875rem] sm:w-[29.375rem] rounded-full p-3"
          disableUnderline
        />

        <div className="flex sm:justify-center items-center mt-[20px]">
          <Checkbox />
          <TextAtom
            children
            className="text-black"
            text="Eu concordo em receber comunicação"
          />
        </div>
        <div className="mb-[100px]">
          <TextAtom
            children
            className="font-light text-black text-left"
            text="Ao informar meus dados, estou ciente"
          />
          <TextAtom
            children
            className="font-light text-black text-left"
            text="das diretrizes da Política de Privacidade"
          />

          <ButtonMolecule
            children
            className="w-[13.375rem] h-[3.5rem] rounded-full bg-[#636363] mt-5 text-black"
            textClassName="text-white text-[23px] font-bold"
            title={"Enviar"}
          />
        </div>
      </div>
    </div>
  );
}
