import { useContext, useEffect } from "react";

import { PostMainMolecule } from "@/components/moleculas/PostMainMolecule";
import { ClubPostsMolecule } from "@/components/moleculas/ClubPostsMolecule";
import { SliderBlogMolecule } from "@/components/moleculas/SliderBlogMolecule";

import { IMyContext, MyContext } from "@/context/MyContext";
import axios from "axios";

export default function Blog() {
  const { blogPostsContent, setBlogPostsContent, setBlogFeaturedContent, setLoading, loading } = useContext(MyContext) as IMyContext;

  async function getData() {
    const response = await axios.get("http://cdf-api-site.herokuapp.com/api/posts");
    setBlogPostsContent(response.data.posts);
    setBlogFeaturedContent(response.data.featured);
    setLoading(true);
  }
  
  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

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
