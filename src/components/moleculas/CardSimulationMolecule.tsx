import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { Button } from "@mui/material";
import { TextAtom } from "../atomos/TextAtom";

export type CardSimulationProps = {
  img: string;
  name: string;
  subname: string;
  price: string;
  date: string;
};

export default function CardSimulationMolecule({
  img,
  name,
  subname,
  price,
  date,
}: CardSimulationProps) {
  return (
    <Card className="w-[16.528125rem] h-[23.50625]">
      <CardHeader floated={false} className="">
        <img
          className="
          h-[12.67125rem]
          w-full
          "
          src={img}
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="">
        <div className="flex flex-row justify-between">
          <TextAtom
            children
            text={name.split("-")[0]}
            className="font-bold text-black 
            overflow-hidden
            "
          />
        </div>
        <div className="flex justify-start flex-col h-30">
          <TextAtom
            children
            text={subname}
            className="text-sm text-left text-[#5B5B5B] font-bold h-12 "
          />
          <TextAtom
            children
            text={date}
            className="text-xs text-left text-black"
          />
          <div className="flex flex-row justify-between items-center">
            <div>
              <TextAtom
                children
                text="a partir de"
                className="text-xs text-left mt-5"
              />
              <TextAtom
                children
                text={price}
                className="text-xl text-[#F20F0F] text-left font-bold"
              />
              <TextAtom
                children
                text="para 2 pessoas"
                className="text-xs text-left"
              />
            </div>
            <div>
              <TextAtom
                children
                text="Comprar"
                className="mt-10 bg-[#F20F0F] h-10 w-20 flex justify-center items-center rounded-lg text-white text-sm font-bold"
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
