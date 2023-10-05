import axios from "../../utils/axios";

export const deleteBook = async (id) => {
  const response = await axios.delete(`/books/${id}`);
  return response.data;
};
