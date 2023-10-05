import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://emon-book-store.onrender.com",
});

export default axiosInstance;
