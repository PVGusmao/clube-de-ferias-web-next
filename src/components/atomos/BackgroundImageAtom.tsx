import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  image: string;
  className: string;
}

export function BackgroundImageAtom({ children, image, className }: Props) {
  return (
    <div
    className={className}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'auto 100%',
    }}>
      {children}
    </div>
  )
}