import { TextAtom } from "../atomos/TextAtom";

export function CardRecentsPosts() {
  return (
    <div className="w-[232px] h-[79px] my-4 flex flex-row  bg-blue-500">
      <img
        className="w-[78px] h-[78px]"
        src="https://avatars.githubusercontent.com/u/81275678?v=4"
      />
      <div className="">
        <TextAtom
          children
          className="text-[16px] text-left font-bold"
          text="Vantagens do App Clube de Ferias"
        />
        <TextAtom
          children
          className="text-[16px] text-left"
          text="12 Dec 2023"
        />
      </div>
    </div>
  );
}
