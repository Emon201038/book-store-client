import axios from "../../utils/axios";

export const editBook = async (id, data) => {
  const response = await axios.put(`/books/${id}`, data);
  return response.data;
};
