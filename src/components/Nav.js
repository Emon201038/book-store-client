import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { searchValue } from "../features/filter/filterSlice";
import { addBookPage, getBooks } from "../features/book/bookSlice";
import { Link } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);

  const isMode = localStorage.getItem("highlightKey");

  const [input, setInput] = useState(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchValue(input));
    dispatch(getBooks(search));
  };

  const handleToggle = () => {
    localStorage.setItem("bookInfo", "");
  };

  const handleEditOrAddBook = () => {
    dispatch(addBookPage());
    localStorage.setItem("isModeNow", "addBook");
    const isModeNow = localStorage.getItem("isModeNow");
    if (isModeNow === "addBook") {
      localStorage.setItem("highlightKey", "addBook");
    }
    if (isModeNow === "editBook") {
      localStorage.setItem("highlightKey", "editBook");
    }
  };

  let title = "";
  if (isMode === "home") {
    title = "Home";
  }
  if (isMode === "edit") {
    title = "Edit Book";
  }
  if (isMode === "addBook") {
    title = "Add Book";
  }

  return (
    <nav className="py-4 2xl:px-6">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container flex items-center justify-between">
        {/* <img src="./images/logo.svg" width="150px" className="object-contain" /> */}

        <ul className="hidden md:flex items-center space-x-6">
          <Link to={"/"}>
            <li className="cursor-pointer" onClick={handleToggle}>
              Home
            </li>
          </Link>

          <li className="cursor-not-allowed">Wishlist</li>

          <li className="cursor-not-allowed">My Collection</li>
          <Link to={"/book/add"}>
            <li className="cursor-pointer" onClick={handleEditOrAddBook}>
              add book
            </li>
          </Link>
        </ul>

        <form className="flex items-center sm:m-2" onSubmit={handleSubmit}>
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-searchBook"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
