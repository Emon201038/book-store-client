import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { editBook } from "./editBookApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  bookInfo: {},
};

export const editBookThunk = createAsyncThunk(
  "book/edit",
  async ({ id, data }) => {
    const book = await editBook(id, data);
    return book;
  }
);

const editBookSlice = createSlice({
  name: "editBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editBookThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.bookInfo = {};
      })
      .addCase(editBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.bookInfo = action.payload;
      })
      .addCase(editBookThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.bookInfo = {};
      });
  },
});

export default editBookSlice.reducer;
