import { TextAtom } from "../atomos/TextAtom";
import { CardRecentsPosts } from "../moleculas/CardRecentsPosts";

export function RecentsPostsOrganism() {
  const data = [
    {
      title: "Vantagens do App Clube de Ferias",
      data: "12 Dec 2023",
      img: "https://avatars.githubusercontent.com/u/81275678?v=4",
    },
    {
      title: "Vantagens do App Clube de Ferias",
      data: "12 Dec 2023",
      img: "https://avatars.githubusercontent.com/u/81275678?v=4",
    },
    {
      title: "Vantagens do App Clube de Ferias",
      data: "12 Dec 2023",
      img: "https://avatars.githubusercontent.com/u/81275678?v=4",
    },
  ];

  return (
    <div className="w-[270px] h-[467px] flex items-center rounded-lg shadow-md flex-col mb-[39px]">
      <TextAtom
        children
        className="text-left text-[24px] font-bold w-full ml-[30px] my-[20px]"
        text="Recents"
      />
      {data.map((element, index) => (
        <CardRecentsPosts
          title={element.title}
          img={element.img}
          data={element.data}
        />
      ))}
    </div>
  );
}
