import React from "react";

import { IconType } from "react-icons";

import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";

export type PropsPlanos = {
  planName: string,
  firstIcon: IconType,
  firstText: string,
  discount: number,
  discountText: string,
  thirdIcon: IconType,
  thirdText: string,
  fourthIcon: IconType,
  fourthText: string,
  priceTag: number,
  buttonName: string,
  colorPlan: string,
  className: string,
};

export function CardPlanosMolecule({
  planName,
  firstIcon,
  firstText,
  discount,
  discountText,
  thirdIcon,
  thirdText,
  fourthIcon,
  fourthText,
  priceTag,
  buttonName,
  colorPlan,
  className,
}: PropsPlanos) {

  return (
    <div
      className={`flex justify-center flex-col h-[32.8125rem] w-72 space-y-9 rounded-2xl bg-white shadow-lg my-11 ${className}`}
    >
      
    </div>
  );
}
