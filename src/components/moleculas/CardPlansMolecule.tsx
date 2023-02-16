import { IconType } from "react-icons/lib";
import { IconAtom } from "../atomos/IconAtom";
import { TextAtom } from "../atomos/TextAtom";
import { ButtonMolecule } from "./ButtonMolecule";

interface Props {
  planName: string;
  colorPlan: string;
  discount: string;
  discountText: string;
  thirdText: string;
  thirdIcon: IconType;
  fourthIcon: IconType;
  fourthText: string;
  priceTag: string;
  buttonName: string;
}

export function CardPlansMolecule({
  planName,
  colorPlan,
  discount,
  discountText,
  thirdText,
  thirdIcon,
  fourthIcon,
  fourthText,
  priceTag,
  buttonName,
}: Props) {
  return (
    <>
      <div className={`flex items-center flex-col w-72 space-y-3`}>
        <TextAtom
          children
          className={`text-4xl font-bold mt-10 mb-9 text-black`}
          text={planName}
          style={{
            color: colorPlan === undefined ? "#BFBFBF" : colorPlan,
          }}
        />

        <div className="flex items-center justify-evenly w-full py-1">
          <TextAtom
            children
            className="text-2xl font-bold text-black"
            text={`${discount}%`}
            style={{
              color: `${colorPlan}`,
            }}
          />
          <TextAtom
            children
            className="w-40 text-left text-black"
            text={discountText}
          />
        </div>

        <div
          className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
          style={{
            backgroundColor: `${colorPlan}`,
            opacity: 0.4,
          }}
        />

        <div className="flex items-center justify-evenly w-full py-1">
          <IconAtom color={colorPlan} icon={thirdIcon} size={42} />
          <TextAtom
            children
            className="w-40 text-left text-black"
            text={thirdText}
          />
        </div>

        <div
          className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
          style={{
            backgroundColor: `${colorPlan}`,
            opacity: 0.4,
          }}
        />

        <div className="flex items-center justify-evenly w-full py-1">
          <IconAtom color={colorPlan} icon={fourthIcon} size={42} />
          <TextAtom
            children
            className="w-40 text-left text-black"
            text={fourthText}
          />
        </div>

        <div
          className={`h-1 bg-[rgba(0,0,0,0.2)] w-[75%]`}
          style={{
            backgroundColor: `${colorPlan}`,
            opacity: 0.4,
          }}
        />

        <div className="flex items-center justify-between">
          <TextAtom
            children
            className={`text-4xl font-bold pt-[40px] text-black`}
            text={`R$ ${priceTag}/mês`}
            style={{
              color: "black",
            }}
          />
        </div>
        <div
          className={`h-[6px] bg-[rgba(0,0,0,0.2)] w-[75%]`}
          style={{
            backgroundColor: `${
              colorPlan === undefined ? "#BFBFBF" : colorPlan
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
              colorPlan === undefined ? "#BFBFBF" : colorPlan
            }`,
            color: "black",
          }}
          className={`mt-[30px] flex items-center w-[183px] justify-center h-[36px] rounded-full`}
          textClassName={`font-bold text-white`}
          title={buttonName}
        />
      </div>
    </>
  );
}
