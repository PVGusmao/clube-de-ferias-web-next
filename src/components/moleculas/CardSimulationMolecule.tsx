import React from "react";

import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { TextAtom } from "../atomos/TextAtom";
import ReactStars from "react-rating-stars-component";

type Props = {
  img: string;
  estado: string;
  modelo: string;
  hotel: string;
  preco: string;
};

export default function CardSimulationMolecule({
  img,
  estado,
  modelo,
  hotel,
  preco,
}: Props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <Card className="w-[16.528125rem] h-[23.50625]">
      <CardHeader floated={false} className="">
        <img src={img} alt="profile-picture" />
      </CardHeader>
      <CardBody className="">
        <div className="flex flex-row justify-between ">
          <TextAtom
            children
            text={estado}
            className="text-xl font-bold text-black"
          />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex justify-start flex-col">
          <TextAtom
            children
            text={modelo}
            className="text-ml font-bold text-left text-black"
          />
          <TextAtom
            children
            text={hotel}
            className="text-ml text-black text-left"
          />
          <TextAtom children text="a partir de" className="text-ml text-left" />
          <TextAtom
            children
            text={preco}
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
