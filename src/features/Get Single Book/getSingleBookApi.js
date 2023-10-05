import axios from "../../utils/axios";

export const fetchSingleBook = async (id) => {
  const response = await axios.get(`/books/${id}`);
  return response.data;
};
