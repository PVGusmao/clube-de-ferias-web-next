import { TextAtom } from "../atomos/TextAtom";
import { SlideShowPlansAtom } from "../atomos/SlideShowPlanosAtom";

import { GiCommercialAirplane } from "react-icons/gi";
import { TbPig } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";
import { CardPlansMolecule } from "../moleculas/CardPlansMolecule";
import { FooterPlansMolecule } from "../moleculas/FooterPlansMolecule";

type Props = {
  data?: any;
};

export function PlansOrganism({ data }: Props) {
  const planos2 = [
    {
      id: 1,
      planName: data.paulo.plans2[0]?.planName,
      firstIcon: GiCommercialAirplane,
      firstText: data.paulo.plans2[0]?.firstText,
      discount: data.paulo.plans2[0]?.discount,
      discountText: data.paulo.plans2[0]?.discountText,
      thirdIcon: TbPig,
      thirdText: data.paulo.plans2[0]?.thirdText,
      fourthIcon: FaRegBuilding,
      fourthText: data.paulo.plans2[0]?.fourthText,
      priceTag: data.paulo.plans2[0]?.priceTag,
      buttonName: data.paulo.plans2[0]?.buttonName,
      colorPlan: data.paulo.plans2[0]?.colorPan,
      fifthText: data.paulo.plans2[0]?.fifthText,
    },
    {
      id: 2,
      planName: data?.data?.paulo?.plans2[1]?.planName,
      firstIcon: GiCommercialAirplane,
      firstText: data.paulo.plans2[1]?.firstText,
      discount: data.paulo.plans2[1]?.discount,
      discountText: data.paulo.plans2[1]?.discountText,
      thirdIcon: TbPig,
      thirdText: data.paulo.plans2[1]?.thirdText,
      fourthIcon: FaRegBuilding,
      fourthText: data.paulo.plans2[1]?.fourthText,
      priceTag: data.paulo.plans2[1]?.priceTag,
      buttonName: data.paulo.plans2[1]?.buttonName,
      colorPlan: data.paulo.plans2[1]?.colorPlan,
      fifthText: data.paulo.plans2[1]?.fifthText,
    },
    {
      id: 3,
      planName: data.paulo.plans2[2]?.planName,
      firstIcon: GiCommercialAirplane,
      firstText: data.paulo.plans2[2]?.firstText,
      discount: data.paulo.plans2[2]?.discount,
      discountText: data.paulo.plans2[2]?.discountText,
      thirdIcon: TbPig,
      thirdText: data.paulo.plans2[2]?.thirdText,
      fourthIcon: FaRegBuilding,
      fourthText: data.paulo.plans2[2]?.fourthText,
      priceTag: data.paulo.plans2[2]?.priceTag,
      buttonName: data.paulo.plans2[2]?.buttonName,
      colorPlan: data.paulo.plans2[2]?.colorPlan,
      fifthText: data.paulo.plans2[2]?.fifthText,
    },
    {
      id: 4,
      planName: data.paulo.plans2[3]?.planName,
      firstIcon: GiCommercialAirplane,
      firstText: data.paulo.plans2[3]?.firstText,
      discount: data.paulo.plans2[3]?.discount,
      discountText: data.paulo.plans2[3]?.discountText,
      thirdIcon: TbPig,
      thirdText: data.paulo.plans2[3]?.thirdText,
      fourthIcon: FaRegBuilding,
      fourthText: data.paulo.plans2[3]?.fourthText,
      priceTag: data.paulo.plans2[3]?.priceTag,
      buttonName: data.paulo.plans2[3]?.buttonName,
      colorPlan: data.paulo.plans2[3]?.colorPlan,
      fifthText: data.paulo.plans2[3]?.fifthText,
    },
  ];

  return (
    <div
      id="planos"
      className="sm:h-[1100px] justify-center sm:py-12 pb-10 sm:pb-0 mt-[270px] sm:mt-[150px]"
    >
      <div className="sm:flex justify-center">
        <TextAtom
          children
          className="text-center sm:text-5xl text-3xl sm:pt-0 pt-[70px] font-bold text-black sm:mr-2 "
          text="Assine agora"
        />
        <TextAtom
          children
          className="text-center sm:text-5xl text-3xl sm:pt-0 pb-[50px] font-bold text-black"
          text="um dos nossos 4 planos"
        />
      </div>
      <div className="sm:flex hidden flex-row justify-evenly mt-[10px] w-full">
        {planos2.map((element, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center h-[640px] bg-white rounded-2xl shadow-lg"
          >
            <CardPlansMolecule
              planName={element.planName}
              colorPlan={element.colorPlan}
              discount={element.discount}
              discountText={element.discountText}
              thirdIcon={element.thirdIcon}
              thirdText={element.thirdText}
              fourthIcon={element.fourthIcon}
              fourthText={element.fourthText}
              priceTag={element.priceTag}
              buttonName={element.buttonName}
              fifthText={element.fifthText}
            />
          </div>
        ))}
      </div>

      <SlideShowPlansAtom
        planos2={planos2}
        className="w-full sm:hidden h-[600px]"
      />

      <FooterPlansMolecule data={data} />
    </div>
  );
}
