import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { TextAtom } from "../atomos/TextAtom";

import { featured1 } from "../../constants/Blog";

export function CardTopPostsLG() {
  useEffect(() => {}, []);

  return (
    <div className=" w-[317px] h-[512px] sm:w-[35.688rem] sm:h-[38.063rem] flex flex-col shadow-md">
      <img
        className="w-full h-[250px] sm:h-[23rem]"
        src={featured1.image_large}
      />
      <div className="p-7">
        <TextAtom
          children
          className="text-left mb-5 font-medium text-xl"
          text={featured1.title}
        />
        <TextAtom
          children
          className="text-left mb-7 text-sm"
          text={featured1.subtitle}
        />
        <div className="flex justify-start">
          <Link
            style={{ backgroundColor: "black", fontSize: "12px" }}
            to={`/blogPost/${featured1.slug}`}
            className="w-[6.938rem] h-[1.808rem] flex justify-center items-center rounded-lg"
          >
            <p className="text-white">Leia Mais</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
