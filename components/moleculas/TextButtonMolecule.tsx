import Link from "next/link";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  text: string,
  to: string,
  className?: string;
  textClassName?: string;
}

export function TextButtonMolecule({text, to, className, textClassName}: Props) {
  return (
    <Link href={to} className={className} onClick={() => {
      to.includes('#') && window.location.replace(to)
    }}>
      <TextAtom children className={textClassName} text={text} />
    </Link>
  )
}