import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { getBooks } from "../../features/book/bookSlice";
import VideoLoader from "../ui/VideoLoader";

const BookList = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const { books, isLoading, isError, error } = useSelector(
    (state) => state.books
  );

  const { tags } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getBooks(search));
    localStorage.setItem("isModeNow", "addBook");
    localStorage.setItem("highlightKey", "home");
  }, [dispatch, search]);

  let content = null;
  if (isLoading) {
    content = books.map((book) => <VideoLoader key={book.id} book={book} />);
  }

  if (!isLoading && isError) {
    content = `Some error occurred while loading. ${error}`;
  }
  if (!isLoading && !isError && books.length === 0) {
    content = "No books found";
  }
  if (!isLoading && !isError && books.length > 0) {
    if (tags === "all") {
      content = books.map((book) => <Book key={book.id} book={book} />);
    } else {
      content = books.map(
        (book) => book?.featured && <Book key={book.id} book={book} />
      );
    }
  }

  return (
    <div className="lws-bookContainer sm:grid-cols-2 lg:grid-cols-3">
      {content}
      {/* {tags === "all"
        ? books.map((book) => <Book book={book} />)
        : books.map((book) => book?.featured && <Book book={book} />)} */}
    </div>
  );
};

export default BookList;
