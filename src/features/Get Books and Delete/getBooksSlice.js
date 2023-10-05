import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks } from "./getBooksApi";
import { deleteBook } from "../Delete Book/deleteBookApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  books: [],
};

export const getBooksThunk = createAsyncThunk(
  "books/get",
  async (search = "") => {
    const book = await fetchBooks(search);
    return book;
  }
);

export const deleteBookThunk = createAsyncThunk("book/delete", async (id) => {
  const book = await deleteBook(id);
  return book;
});

const getBooksSlice = createSlice({
  name: "getBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.books = "";
      })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.books = action.payload;
      })
      .addCase(getBooksThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.books = "";
      })

      //delete book
      .addCase(deleteBookThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(deleteBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.books = state.books.filter((b) => b.id !== action.meta.arg);
      })
      .addCase(deleteBookThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default getBooksSlice.reducer;
