import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createBook,
  deleteBook,
  editBook,
  fetchBooks,
  fetchSingleBook,
} from "./bookApi";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
  error: "",
  editting: {},
  isMode: "home",
};

//async thunk
export const getBooks = createAsyncThunk("book/fetchBooks", async (search) => {
  const books = await fetchBooks(search);
  return books;
});

export const getSingleBook = createAsyncThunk(
  "book/fetchSingleBook",
  async (search) => {
    const book = await fetchSingleBook(search);
    return book;
  }
);

export const createBooks = createAsyncThunk(
  "book/createBooks",
  async (data) => {
    const book = await createBook(data);
    return book;
  }
);

export const updateBook = createAsyncThunk(
  "book/updateBook",
  async ({ id, data }) => {
    const book = await editBook(id, data);
    return book;
  }
);

export const removeBook = createAsyncThunk("book/removeBook", async (id) => {
  const book = await deleteBook(id);
  return book;
});

const bookSlice = createSlice({
  name: "Book",
  initialState,
  reducers: {
    editingActive: (state, action) => {
      state.editting = action.payload;
    },
    editingInActive: (state, action) => {
      state.editting = {};
    },
    homePage: (state) => {
      state.isMode = "home";
    },
    addBookPage: (state) => {
      state.isMode = "addBook";
    },
    editBookPage: (state) => {
      state.isMode = "editBook";
    },
  },
  extraReducers: (builder) => {
    builder
      //fetch books
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.books = [];
      })

      //fetch singleBook
      .addCase(getSingleBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getSingleBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(getSingleBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.books = [];
      })

      //create book
      .addCase(createBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books.push(action.payload);
      })
      .addCase(createBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //update book
      .addCase(updateBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.books.findIndex(
          (b) => b.id === action.payload?.id
        );
        state.books[indexToUpdate] = action.payload;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //delete book
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = state.books.filter((b) => b.id !== action.meta.arg);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default bookSlice.reducer;
export const {
  editingActive,
  editingInActive,
  homePage,
  addBookPage,
  editBookPage,
} = bookSlice.actions;
