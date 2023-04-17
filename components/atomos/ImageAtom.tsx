import Image, { StaticImageData } from "next/image"

type Props = {
  source: any,
  alt: string,
  className: string,
  width?: number,
  height?: number,
}

export function ImageAtom({ className, source, alt, width, height }: Props) {
  return (
    <Image
      className={className}
      width={width}
      height={height}
      loader={() => source}
      src={source}
      alt={alt}
    />
  )
}