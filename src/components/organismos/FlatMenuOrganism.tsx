import React from "react";

import { MdPeopleAlt } from 'react-icons/md';
import { IconAtom } from "../atomos/IconAtom";
import { TextButtonMolecule } from "../moleculas/TextButtonMolecule";

export function FlatMenuOrganism() {
  return (
    <div className="bg-blue-900 flex justify-evenly">
      <div className="">
        <div className="flex items-center w-24">
          <IconAtom icon={MdPeopleAlt} color='white'/>
          <TextButtonMolecule
            to="www.google.com.br"
            text="Sobre Nós"
            textClassName="text-sm ml-2 text-white"
          />
        </div>
        <div className="flex items-center">
          <IconAtom icon={MdPeopleAlt} color='white'/>
          <TextButtonMolecule
            to="www.google.com.br"
            text="Sobre Nós"
            textClassName="text-sm ml-2 text-white"
            />
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <IconAtom icon={MdPeopleAlt} color='white'/>
          <TextButtonMolecule
            to="www.google.com.br"
            text="Sobre Nós"
            textClassName="text-sm ml-2 text-white"
          />
        </div>
  
        <div className="flex items-center">
          <IconAtom icon={MdPeopleAlt} color='white'/>
          <TextButtonMolecule
            to="www.google.com.br"
            text="Sobre Nós"
            textClassName="text-sm ml-2 text-white"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <IconAtom icon={MdPeopleAlt} color='white'/>
          <TextButtonMolecule
            to="www.google.com.br"
            text="Sobre Nós"
            textClassName="text-sm ml-2 text-white"
          />
        </div>
  
        <div className="flex items-center">
          <IconAtom icon={MdPeopleAlt} color='white'/>
          <TextButtonMolecule
            to="www.google.com.br"
            text="Sobre Nós"
            textClassName="text-sm ml-2 text-white"
          />
        </div>
      </div>
    </div>
  )
}