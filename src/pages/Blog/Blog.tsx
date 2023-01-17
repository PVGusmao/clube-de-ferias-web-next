import React from "react";
import { ClubPostsOrganism } from "../../components/organismos/ClubPostsOrganism";
import { SliderBlogOrganism } from "../../components/organismos/SliderBlogOrganism";

export function Blog() {
  return (
    <div className="bg-blue-300  w-full h-96">
      <SliderBlogOrganism />
      <ClubPostsOrganism />
      <p>My Blog!!</p>
    </div>
  );
}
