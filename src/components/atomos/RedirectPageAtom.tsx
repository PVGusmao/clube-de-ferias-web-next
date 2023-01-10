import { useEffect } from "react";

type Props = {
  to: string;
}

export const RedirectPage = ({ to }: Props) => {
  useEffect(() => {
    window.location.replace(to);
  }, [])
  
  return (
  <div>
    <h3>Redirecting...</h3>
  </div>
  )
}