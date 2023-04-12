import React from "react";
import { Avatar } from "@material-tailwind/react";

type Props = {
  img: string;
};

export default function AvatarAtom({ img }: Props) {
  return <Avatar className="h-16 w-16" src={img} alt="avatar" />;
}
