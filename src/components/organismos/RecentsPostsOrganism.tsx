import { useEffect, useState } from "react";
import api from "../../services/api";
import { TextAtom } from "../atomos/TextAtom";
import { CardRecentsPosts } from "../moleculas/CardRecentsPosts";

export function RecentsPostsOrganism() {
  const [data, setData] = useState([]);

  async function getBlogPost() {
    await api.get("/posts").then((e) => setData(e.data.featured));
  }

  useEffect(() => {
    getBlogPost();
  }, []);

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
          img={element.image_thumbnail}
          data={element.data}
          slug={element.slug}
        />
      ))}
    </div>
  );
}
