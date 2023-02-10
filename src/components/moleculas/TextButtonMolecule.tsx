import { Link, useNavigate } from "react-router-dom";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  text: string,
  to: string,
  className?: string;
  textClassName?: string;
}

export function TextButtonMolecule({text, to, className, textClassName}: Props) {
  const navigation = useNavigate();
  return (
    <Link to={to} className={className} onClick={() => {
      console.log(to);
      to.includes('#') && window.location.replace(to)
    }}>
      <TextAtom children className={textClassName} text={text} />
    </Link>
  )
}