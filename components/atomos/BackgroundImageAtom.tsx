import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  image: string;
  className: string;
  backgroundSize?: string;
};

export function BackgroundImageAtom({
  children,
  image,
  className,
  backgroundSize,
}: Props) {
  return (
    <div
      className={className}
      style={{
        backgroundSize: `${backgroundSize}`,
        backgroundImage: `url(${image})`,
      }}
    >
      {children}
    </div>
  );
}
