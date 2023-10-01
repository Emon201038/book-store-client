import axios from "../../utils/axios";

export const fetchBooks = async (search) => {
  let queryString = "";
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const response = await axios.get(`/books/?${queryString}`);
  return response.data;
};

export const fetchSingleBook = async (search) => {
  const response = await axios.get(`/books/${search}`);
  return response.data;
};
export const createBook = async (data) => {
  const response = await axios.post("/books", data);
  return response.data;
};

export const editBook = async (id, data) => {
  const response = await axios.put(`/books/${id}`, data);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axios.delete(`/books/${id}`);
  return response.data;
};
