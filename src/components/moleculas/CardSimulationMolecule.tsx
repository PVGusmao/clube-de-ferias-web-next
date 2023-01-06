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
    <Card className="w-96 h-[12.67125] bg-blue-300">
      <CardHeader floated={false} className="h-80">
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
        <TextAtom
          children
          text={modelo}
          className="text-ml font-bold text-black"
        />
        <TextAtom children text={hotel} className="text-ml text-black" />
        <TextAtom children text="a partir de" className="text-ml" />
        <TextAtom children text={preco} className="text-xl text-[##F20F0F}" />
        <TextAtom children text="para 2 pessoas" className="text-ml" />
      </CardBody>
    </Card>
  );
}
