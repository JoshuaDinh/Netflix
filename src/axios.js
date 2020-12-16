import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themovied.org/3",
});

export default instance;
