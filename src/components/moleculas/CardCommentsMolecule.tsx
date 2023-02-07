import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import AvatarAtom from "../atomos/AvatarAtom";
import { TextAtom } from "../atomos/TextAtom";
import React from "react";
import ReactStars from "react-rating-stars-component";

import { IconAtom } from "../atomos/IconAtom";
import { DiApple } from "react-icons/di";

import logo from "../../assets/logo-s-red.png";

type Props = {
  content: string;
  name: string;
  ocupation: string;
  img: string;
};

export default function CardCommentsMolecule({
  content,
  name,
  ocupation,
  img,
}: Props) {
  return (
    <Card className="w-[370px] h-[420px] justify-between my-9">
      <CardBody className="">
        <div className="my-6">
          <img className="mb-4" src={logo} alt="logo" />

          <ReactStars
            value={5}
            count={5}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <TextAtom
          children
          className="text-sm text-black text-left "
          text={content}
        />
      </CardBody>
      <CardFooter className="flex items-center justify-between py-3 ">
        <AvatarAtom img={img} />
        <div className="w-full ml-4">
          <TextAtom
            children
            className="text-sm font-bold text-black text-left"
            text={name}
          />
          <TextAtom
            children
            className="text-sm text-left text-[#B4B7C9] font-bold"
            text={ocupation}
          />
        </div>
      </CardFooter>
    </Card>
  );
}
