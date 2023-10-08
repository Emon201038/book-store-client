import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../../features/Filter Book/filterSlice";

const Navbar = () => {
  const { searchValue } = useSelector((state) => state.filter);
  const [input, setInput] = useState(searchValue);

  const location = useLocation();
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.getSingleBook);
  const editMode = location.pathname === `/book/edit/${book.id}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(input));
  };

  const [isChecked, setIsChecked] = useState(false);

  const body = document.body;

  if (isChecked) {
    body.classList.add("disabled-scroll");
  } else {
    body.classList.remove("disabled-scroll");
  }

  return (
    <header className="">
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <input
        type="checkbox"
        name=""
        id="nav_check"
        hidden
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <nav>
        <div></div>
        <div className="cross" onClick={() => setIsChecked(!isChecked)}>
          <ion-icon name="close"></ion-icon>
        </div>
        <ul className="text-white text-center">
          <Link to={"/"}>
            <li
              className={`${
                location.pathname === "/"
                  ? "font-semibold bg-green-400 rounded-lg hover:bg-green-400"
                  : ""
              } `}
              onClick={() => setIsChecked(!isChecked)}
            >
              Book Store
            </li>
          </Link>
          <Link to={"/wishlist"}>
            <li
              className={`${
                location.pathname === "/wishlist"
                  ? "font-semibold bg-green-400 rounded-lg hover:bg-green-400"
                  : ""
              } `}
              onClick={() => setIsChecked(!isChecked)}
            >
              Wish List
            </li>
          </Link>
          <Link to={"/mycollections"}>
            <li
              className={`${
                location.pathname === "/mycollections"
                  ? "font-semibold bg-green-400 rounded-lg hover:bg-green-400"
                  : ""
              }`}
              onClick={() => setIsChecked(!isChecked)}
            >
              My collections
            </li>
          </Link>
          <Link to={editMode ? `/book/edit/${book.id}` : "/book/add"}>
            <li
              className={`${
                location.pathname === "/book/add" ||
                location.pathname === `/book/edit/${book.id}`
                  ? "font-semibold bg-green-400 rounded-lg hover:bg-green-400"
                  : ""
              }`}
              onClick={() => setIsChecked(!isChecked)}
            >
              Add book
            </li>
          </Link>
        </ul>
      </nav>
      <div className="logo">
        <form onSubmit={handleSubmit} className="max-sm:w-[160px] ">
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-1 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              className=" h-[30px] pl-7 "
              placeholder="Search books..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
