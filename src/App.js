import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Head from "./components/Navigation/Head";
import Home from "./components/Home/Home";
import EditBook from "./components/Edit Book/EditBook";
import AddBook from "./components/Add Book/AddBook";

function App() {
  return (
    <Router>
      <Head />
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
    </Router>
  );
}

export default App;
