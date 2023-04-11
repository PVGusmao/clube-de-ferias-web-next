import { useContext, useEffect } from "react";
import { TextAtom } from "../../components/atomos/TextAtom";
import { FormOrganism } from "../../components/organismos/FormOrganism";
import { IMyContext, MyContext } from "../../context/MyContext";

export function TalkToUs() {
  const { setLoading } = useContext(MyContext) as IMyContext;
  
  useEffect(() => {
    setLoading(true);
  }, [])
  return (
    <>
      <div className="flex flex-col items-center ">
        <TextAtom
          children
          className=" text-[25px] sm:text-[44px] font-bold mt-10 mb-20"
          text="Olá, aqui você pode tirar suas dúvidas:"
        />
        <FormOrganism />
      </div>
    </>
  );
}
