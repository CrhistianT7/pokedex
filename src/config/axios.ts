import axios from "axios";

const baseURL = import.meta.env.VITE_POKEAPI_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosClient;
