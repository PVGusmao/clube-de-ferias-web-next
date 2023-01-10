
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
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
        <div className="flex flex-row justify-between h-20 ">
          <TextAtom
            children
            text={name}
            className="font-bold text-black 
            overflow-hidden
            "
          />
        </div>
        <div className="flex justify-start flex-col">
          <TextAtom
            children
            text={subname}
            className="text-xs text-left text-black"
          />
          <TextAtom
            children
            text={date}
            className="text-xs text-left text-black"
          />
          <TextAtom children text="a partir de" className="text-ml text-left" />
          <TextAtom
            children
            text={price}
            className="text-xl text-[##F20F0F] text-left"
          />
          <TextAtom
            children
            text="para 2 pessoas"
            className="text-ml text-left"
          />
        </div>
      </CardBody>
    </Card>
  );
}
