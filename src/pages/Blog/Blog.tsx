import { useContext, useEffect } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import { PostMainMolecule } from "../../components/moleculas/PostMainMolecule";
import { ClubPostsMolecule } from "../../components/moleculas/ClubPostsMolecule";
import { SliderBlogMolecule } from "../../components/moleculas/SliderBlogMolecule";

import api from "../../services/api";

export function Blog() {
  const { blogPostsContent, setBlogPostsContent, setBlogFeaturedContent } = useContext(MyContext) as IMyContext;

  async function getData() {
    const response = await api.get("/posts");
    setBlogPostsContent(response.data.posts);
    setBlogFeaturedContent(response.data.featured);
  }
  
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      {
        blogPostsContent &&
          <div className="w-full">
            <SliderBlogMolecule />
            
            <PostMainMolecule />
            
            <ClubPostsMolecule />
          </div>
      }
    </>
  );
}
