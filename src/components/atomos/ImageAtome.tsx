type Props = {
  source: string,
  alt: string,
  className: string,
}

export function ImageAtom({ className, source, alt }: Props) {
  return (
    <img className={className} src={source} alt={alt} />
  )
}