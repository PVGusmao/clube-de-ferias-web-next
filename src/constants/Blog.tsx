import api from "../services/api";

async function getData() {
  const response = await api.get("/posts");
  localStorage.setItem("posts", JSON.stringify(response));
}

getData();

export const data = JSON.parse(localStorage.getItem("posts"));

export const { posts, featured } = data?.data;

export const featured1 = data?.data?.featured[0];

export interface FeaturedAndPostInterface {
  capa: string;
  featured: boolean;
  id: number;
  image_large: string;
  image_medium: string;
  image_thumbnail: string;
  is_published: number;
  lang_id: number;
  meta_desc: string | null;
  post_body: string;
  post_id: number;
  posted_at: string;
  created_at: string;
  seo_title: string | null;
  short_description: string | null;
  slug: string;
  subtitle: string;
  title: string;
  updated_at: string;
  use_view_file: string | null;
  user_id: number;
}
