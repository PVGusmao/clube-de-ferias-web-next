import React from "react";

import { Input, InputProps } from "@material-tailwind/react";

type Props = InputProps & {

}

export function InputAtom({ ...rest }: Props) {
  
  return (
    <Input { ...rest } />
  )
}