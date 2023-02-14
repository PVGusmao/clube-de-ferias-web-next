import React from "react";
import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { planos, planos2 } from "../../constants";

import { CardPlanosMolecule } from "../moleculas/CardPlanosMolecule";
import { TextAtom } from "./TextAtom";
import { IconAtom } from "./IconAtom";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";

type Props = {
  className?: string;
};

export const SlideShowPlansAtom = ({ className }: Props) => {
  return (
    <div className={`px-8 ${className}`}>
      <Slide arrows={true} transitionDuration={250}>
        {planos2.map((element, index) => (
          <div key={index} className="flex flex-col items-cente h-[570px] bg-white rounded-2xl shadow-lg m-1">
            <div
              className="h-full flex items-center justify-center flex-col"
              key={index}
            >
              <div className={`flex items-center flex-col w-72 space-y-3`}>
                <TextAtom
                  children
                  className={`text-4xl font-bold pt-4`}
                  text={element.planName}
                  style={{
                    color: `${
                      element.colorPlan === undefined
                        ? "#BFBFBF"
                        : element.colorPlan
                    }`,
                  }}
                />

                <div className="flex items-center justify-evenly w-full py-1">
                  <TextAtom
                    className="text-2xl font-bold"
                    text={`${element.discount}%`}
                    style={{
                      color: `${element.colorPlan}`,
                    }}
                  >
                    {" "}
                  </TextAtom>
                  <TextAtom
                    className="w-40 text-left"
                    text={element.discountText}
                  >
                    {" "}
                  </TextAtom>
                </div>

                <div
                  className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
                  style={{
                    backgroundColor: `${element.colorPlan}`,
                    opacity: 0.4,
                  }}
                />

                <div className="flex items-center justify-evenly w-full py-1">
                  <IconAtom
                    color={element.colorPlan}
                    icon={element.thirdIcon}
                    size={42}
                  />
                  <TextAtom
                    className="w-40 text-left"
                    text={element.thirdText}
                  > </TextAtom>
                </div>

                <div
                  className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
                  style={{
                    backgroundColor: `${element.colorPlan}`,
                    opacity: 0.4,
                  }}
                />

                <div className="flex items-center justify-evenly w-full py-1">
                  <IconAtom
                    color={element.colorPlan}
                    icon={element.fourthIcon}
                    size={42}
                  />
                  <TextAtom
                    className="w-40 text-left"
                    text={element.fourthText}
                  > </TextAtom>
                </div>

                <div
                  className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
                  style={{
                    backgroundColor: `${element.colorPlan}`,
                    opacity: 0.4,
                  }}
                />

                <div className="flex items-center justify-between mt-[50px] ">
                  <TextAtom
                    children
                    className={`text-4xl font-bold py-1`}
                    text={`R$ ${element.priceTag}/mês`}
                    style={{
                      color: "black",
                    }}
                  />
                </div>
                <div
                  className={`h-[6px] bg-[rgba(0,0,0,0.2)] w-[75%]`}
                  style={{
                    backgroundColor: `${
                      element.colorPlan === undefined
                        ? "#BFBFBF"
                        : element.colorPlan
                    }`,
                    opacity: 0.4,
                  }}
                />
              </div>

              <div>
                <ButtonMolecule
                  children
                  style={{
                    backgroundColor: `${
                      element.colorPlan === undefined
                        ? "#BFBFBF"
                        : element.colorPlan
                    }`,
                    color: "black",
                  }}
                  className={`mt-4 flex items-center justify-center h-[36px] w-[183px] rounded-full mb-2`}
                  textClassName={`font-bold text-white`}
                  title={element.buttonName}
                ></ButtonMolecule>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
