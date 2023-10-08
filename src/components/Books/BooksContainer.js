import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import SingleBook from "./SingleBook";
import { getBooksThunk } from "../../features/Get Books and Delete/getBooksSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/VideoLoader";

const BooksContainer = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.filter);
  const { tags } = useSelector((state) => state.filter);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(getBooksThunk(searchValue));
    }
  }, [dispatch, searchValue, location.pathname]);

  const { isLoading, isError, error, books } = useSelector(
    (state) => state.getBooks
  );

  //decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  } else if (!isLoading && isError) {
    content = (
      <Error message="Some error occures while loading" error={error} />
    );
  } else if (!isLoading && !isError && books.length > 0) {
    if (tags === "all") {
      content = books.map((book) => (
        <SingleBook className="m-[5px]" key={book.id} book={book} />
      ));
    } else if (tags === "featured") {
      content = books.map(
        (book) =>
          book?.featured && (
            <SingleBook className="m-[5px]" key={book.id} book={book} />
          )
      );
    }
  } else if (!isLoading && !isError && books.length === 0) {
    content = <h3>No Books found</h3>;
  }

  return <div className="lws-bookContainer">{content}</div>;
};

export default BooksContainer;
