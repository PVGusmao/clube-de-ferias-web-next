import api from "../services/api";

async function getData() {
  const response = await api.get("/posts");
  localStorage.setItem("posts", JSON.stringify(response));
}

getData();

export const data = JSON.parse(localStorage.getItem("posts"));

export const { posts, featured } = data?.data;

export const featured1 = data?.data?.featured[0];
