import { TextAtom } from "../../components/atomos/TextAtom";
import { FormOrganism } from "../../components/organismos/FormOrganism";

export function TalkToUs() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <TextAtom
          children
          className=" text-[25px] sm:text-[44px] font-bold  mt-10"
          text="Olá, aqui você pode tirar suas dúvidas:"
        />
        <FormOrganism />
      </div>
    </>
  );
}
