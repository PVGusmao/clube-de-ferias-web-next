import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { TextAtom } from "../atomos/TextAtom";

export function CardTopPostsLG() {
  const [post, setPost] = useState([]);
  async function getData() {
    await api.get("/posts").then((e) => setPost(e.data.posts));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" w-[317px] h-[512px] sm:w-[35.688rem] sm:h-[38.063rem] flex flex-col shadow-md">
      <img
        className="w-full h-[250px] sm:h-[23rem]"
        src={post[1].image_large}
      />
      <div className="p-7">
        <TextAtom
          children
          className="text-left mb-5 font-medium text-xl"
          text={post[1].title}
        />
        <TextAtom
          children
          className="text-left mb-7 text-sm"
          text={post[1].subtitle}
        />
        <div className="flex justify-start">
          {/* <Button
            onClick={handleClick}
            style={{ backgroundColor: "black", fontSize: "12px" }}
            variant="contained"
            className="w-[6.938rem] h-[1.808rem]"
          >
            Leia Mais
          </Button> */}
        </div>
      </div>
    </div>
  );
}
