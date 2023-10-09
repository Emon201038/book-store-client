import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import EditBook from "./Edit Book/EditBook";
import AddBook from "./Add Book/AddBook";
import Nav from "./Navigation/Nav";

const Body = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Book-Store";
    } else if (location.pathname === "/book/add") {
      document.title = "Add Book";
    } else if (location.pathname === "/book/edit") {
      document.title = "Edit Book";
    } else if (location.pathname === "/wishlist") {
      document.title = "Wish-List";
    } else if (location.pathname === "/mycollections") {
      document.title = "My-Collections";
    }
  }, [location.pathname]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/edit/:id" element={<EditBook />} />
        <Route path="/book/add/" element={<AddBook />} />
        <Route
          path="/wishlist"
          element={
            <div className="w-2/3 h-[100px] ">
              <div className="flex h-full justify-center items-center  font-bold ">
                Wish List will comming soon.....
              </div>
            </div>
          }
        />
        <Route
          path="/mycollections"
          element={
            <div className="w-2/3 h-[100px] ">
              <div className="flex h-full justify-center items-center  font-bold ">
                <div className="w-2/3 h-[100px] ">
                  <div className="flex h-full justify-center items-center  font-bold ">
                    My collections will comming soon.....
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Body;
