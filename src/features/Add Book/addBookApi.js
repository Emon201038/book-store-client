import axios from "../../utils/axios";

export const addBook = async (data) => {
  const response = await axios.post("/books", data);
  return response.data;
};
