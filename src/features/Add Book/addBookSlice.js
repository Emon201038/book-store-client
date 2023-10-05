import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addBook } from "./addBookApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  bookData: "",
};

export const addBookThunk = createAsyncThunk("book/add", async (data) => {
  const book = await addBook(data);
  return book;
});

const addBookSlice = createSlice({
  name: "AddBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBookThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.bookData = "";
      })
      .addCase(addBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.bookData = action.payload;
      })
      .addCase(addBookThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.bookData = "";
      });
  },
});

export default addBookSlice.reducer;
