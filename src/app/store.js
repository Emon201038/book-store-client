import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/book/bookSlice";
import filterSlice from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterSlice,
  },
});
