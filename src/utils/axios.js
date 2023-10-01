import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bookstore-emon.netlify.app/",
});
export default axiosInstance;
