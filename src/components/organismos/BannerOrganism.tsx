import React from "react";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";
import { TextAtom } from "../atomos/TextAtom";

export function BannerOrganism() {
  return (
    <div
      className={`flex flex-col sm:items-stretch sm:w-full h-96 sm:h-36 sm:px-16 pt-12 sm:p-0 sm:rounded-lg bg-[#F20F0F]`}
    >
      <div className="flex flex-col h-full sm:flex-row sm:justify-around">
        <div className="self-center sm:mr-10">
          <TextAtom
            children
            text="PROMOÇÃO"
            className="text-3xl text-white sm:text-left font-bold"
          />
          <TextAtom
            children
            text="ESPECIAL"
            className="text-3xl text-center text-white sm:text-left font-bold sm:ml-2 "
          />
        </div>
        <TextAtom
          children
          className="text-center self-center px-6 text-white sm:w-[33.9375rem] my-9 sm:text-left"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus mattis, pulvinar dapibus leo."
        />
        <ButtonMolecule
          className="bg-white h-11 self-center w-48 text-black  "
          children
          title="BAIXE O APP"
          textClassName="text-sm font-bold text-[red]"
        />
      </div>
    </div>
  );
}
