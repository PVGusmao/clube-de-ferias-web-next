import axios from "axios";

const api = axios.create({
  baseURL: "https://cdf-api-site.herokuapp.com/api",
});

export default api;
