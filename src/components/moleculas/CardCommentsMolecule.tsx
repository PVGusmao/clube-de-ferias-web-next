import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import AvatarAtom from "../atomos/AvatarAtom";
import { TextAtom } from "../atomos/TextAtom";

import { FaTiktok } from "react-icons/fa";
import { IconAtom } from "../atomos/IconAtom";
import { DiApple } from "react-icons/di";

export default function CardCommentsMolecule() {
  return (
    <Card className="w-96">
      <CardBody className="">
        <IconAtom icon={DiApple} size={30} color="black" />
        <div className="flex flex-row my-6">
          <IconAtom icon={DiApple} size={30} color="black" />
          <IconAtom icon={DiApple} size={30} color="black" />
          <IconAtom icon={DiApple} size={30} color="black" />
          <IconAtom icon={DiApple} size={30} color="black" />
          <IconAtom icon={DiApple} size={30} color="black" />
          <IconAtom icon={DiApple} size={30} color="black" />
        </div>
        <TextAtom
          className="text-sm"
          text="Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep screen violence joints symptoms x-ray yawn. Contagious cough diabetes mellitus..."
        />
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <AvatarAtom img="https://avatars.githubusercontent.com/u/81275678?v=4" />
        <div className="w-full ml-4 ">
          <TextAtom
            className="text-sm font-bold text-black"
            text="Felipe Nunes"
          />
          <TextAtom className="text-sm" text="Photographer" />
        </div>
      </CardFooter>
    </Card>
  );
}
