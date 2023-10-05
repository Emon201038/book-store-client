import { configureStore } from "@reduxjs/toolkit";

import addBookReducer from "../features/Add Book/addBookSlice";
import getBooksReducer from "../features/Get Books and Delete/getBooksSlice";
import getSingleBookReducer from "../features/Get Single Book/getSingleBookSlice";
import editBookReducer from "../features/Edit Book/editBookSlice";
import filterReducer from "../features/Filter Book/filterSlice";

export const store = configureStore({
  reducer: {
    addBook: addBookReducer,
    getBooks: getBooksReducer,
    getSingleBook: getSingleBookReducer,
    editBook: editBookReducer,
    filter: filterReducer,
  },
});
