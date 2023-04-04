import { TextAtom } from "../atomos/TextAtom";
import { ImageAtom } from "../atomos/ImageAtome";

import { ButtonMolecule } from "./ButtonMolecule";

import logo from "../../assets/logo-s-red.png";

type Props = {
  bodyText: string;
  buttonText: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalAlert({ bodyText, buttonText, showModal, setShowModal }: Props) {
  return (
    <>
      <div className="fade-in-modal bg-black w-[100%] h-[100%] fixed left-0 opacity-50 z-10" />
      <div className="flex flex-col justify-between bg-[white] w-[80%] h-[auto] sm:w-[500px] sm:h-[350px] z-20 fixed left-[10%] sm:left-[35%] top-[15%] rounded-3xl">
        <div className="flex items-center justify-between">
          <TextAtom
            className="ml-5 mt-5 text-xl font-bold"
            text="Atenção"
          > </TextAtom>
          
          <ImageAtom className="w-[50px] mr-5 mt-5" source={logo} alt="logo clube de férias"/>
        </div>

        <div>
          <TextAtom
            className="text-xl mt-10 mb-10"
            text={bodyText}
          > </TextAtom>
        </div>

        <div className="h-[100px]">
          <ButtonMolecule
            textClassName="text-white font-bold text-lg"
            className="bg-[red]"
            children
            title={buttonText}
            onPress={() => {
              setShowModal(!showModal);
            }}
          />
        </div>
      </div>
    </>
  )
}