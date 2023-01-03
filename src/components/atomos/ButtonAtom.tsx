import React, { ReactNode } from "react";

import { Button, ButtonProps, Typography } from "@material-tailwind/react";

type Props = ButtonProps & {
  title:string,
  children: ReactNode,
};

export function ButtonAtom({ children, title, ...rest }: Props) {
  return (
  <Button {...rest}>
    <Typography variant="paragraph">
      {title}
    </Typography>
  </Button>
  );
}
