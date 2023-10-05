import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleBook } from "./getSingleBookApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  book: {},
};

export const getSingleBookThunk = createAsyncThunk("book/get", async (id) => {
  const book = await fetchSingleBook(id);
  return book;
});

const getSingleBookSlice = createSlice({
  name: "getBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleBookThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.book = "";
      })
      .addCase(getSingleBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.book = action.payload;
      })
      .addCase(getSingleBookThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.book = "";
      });
  },
});

export default getSingleBookSlice.reducer;
