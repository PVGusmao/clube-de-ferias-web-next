import { Alert, AlertProps } from "@material-tailwind/react";
import React from "react";

type Props = AlertProps & {
  message: string;
}

export function AlertAtom({ message, ...rest}: Props) {
  return (
    <Alert {...rest}>
      {message}
    </Alert>
  )
}