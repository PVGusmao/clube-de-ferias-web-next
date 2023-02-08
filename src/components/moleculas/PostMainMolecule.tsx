import { useEffect, useState } from "react";
import { clubTopPost } from "../../constants";
import api from "../../services/api";
import { TextAtom } from "../atomos/TextAtom";
import { CardTopPostsLG } from "./CardTopPostsLG";
import { CardTopPostsSM } from "./CardTopPostsSM";

export function PostMainMolecule() {
  const [post, setPost] = useState([]);
  const [postLG, setPostLG] = useState([]);

  async function getData() {
    await api.get("/posts").then((e) => setPost(e.data.featured));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TextAtom
        children
        className="text-[#FF0000] text-[28px] sm:ml-[150px] font-medium text-left mb-[40px]"
        text="Nossas principais postagens"
      />
      <div className="sm:flex flex sm:flex-row flex-col items-center justify-center mb-[100px]">
        <div className="sm:flex flex-col sm:mr-10">
          {post.map((element, index) => (
            <CardTopPostsSM
              title={element.title}
              subtitle={element.subtitle}
              slug={element.slug}
            />
          ))}
        </div>
        <CardTopPostsLG />
      </div>
    </div>
  );
}
