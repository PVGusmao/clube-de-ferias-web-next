import React, { useState } from "react";
import { ButtonAtom } from "../../components/atomos/ButtonAtom";
import { IconAtom } from "../../components/atomos/IconAtom";
import { TextAtom } from "../../components/atomos/TextAtom";
import { DiApple } from "react-icons/di";
import { InputAtom } from "../../components/atomos/InputAtom";
import { AlertAtom } from "../../components/atomos/AlertAtom";
import { NavBarMolecule } from "../../components/moleculas/NavBarMolecule";

export default function Home() {
  const [value, setValue] = useState(false);
  return (
    <>

      <NavBarMolecule />

      <TextAtom
        children
        className="text-sm text-red-400"
        text='Meu pau de óculos.'
      />

      <ButtonAtom
        children
        title='Click Me'
        variant="outlined"
        onClick={() => {
          setValue(!value)
        }}
      />

      <IconAtom
        icon={DiApple}
        size={30}
        color='white'
      />

      <InputAtom
        placeholder='Digite seu nome.'
      />
      {
        value && <AlertAtom children message='A mensagem é meramente ilustrativa' />
      }
    </>
  );
}
