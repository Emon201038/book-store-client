import axios from "../../utils/axios";

export const fetchBooks = async (search = "") => {
  let queryString = "";
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const response = await axios.get(`/books/?${queryString}`);
  return response.data;
};
