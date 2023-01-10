import axios from "axios";

const api = axios.create({
  baseURL: "http://lpdell.local/api",
});

export default api;
