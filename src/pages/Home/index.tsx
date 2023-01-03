import React from "react";
import { ButtonAtom } from "../../components/atomos/ButtonAtom";
import { IconAtom } from "../../components/atomos/IconAtom";
import { TextAtom } from "../../components/atomos/TextAtom";
import { DiApple } from "react-icons/di";

export default function Home() {
  return (
    <>
      <TextAtom
        children
        className="text-sm text-red-400"
        text='Meu pau de óculos.'
      />

      <ButtonAtom
        children
        title='Click Me'
        variant="outlined"
      />

      <IconAtom icon={DiApple} />

    </>
  );
}
