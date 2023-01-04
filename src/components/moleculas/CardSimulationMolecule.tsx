import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { TextAtom } from "../atomos/TextAtom";
import ReactStars from "react-rating-stars-component";

export default function Example() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <Card className="w-96 h-96 bg-blue-300">
      <CardHeader floated={false} className="h-80">
        <img src="/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="">
        <div className="flex flex-row justify-between ">
          <TextAtom text="Salvador" className="text-xl font-bold text-black" />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <TextAtom
          text="Hotel + Transer"
          className="text-ml font-bold text-black"
        />
        <TextAtom text="Zagaia Eco Resort" className="text-ml text-black" />
        <TextAtom text="a partir de" className="text-ml" />
        <TextAtom text="6x R$ 2.000" className="text-ml" />
        <TextAtom text="para 2 pessoas" className="text-ml" />
      </CardBody>
    </Card>
  );
}
