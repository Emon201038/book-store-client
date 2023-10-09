import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BookNav from "../Navigation/BookNav";
import BooksContainer from "../Books/BooksContainer";

const Home = () => {
  const { state } = useLocation();
  const successMessage =
    state !== null && state.successMessage ? state.successMessage : "";
  const deleteMessage =
    state !== null && state.deleteResponse ? state.deleteResponse : "";
  const editedMessage =
    state !== null && state.editedMessage ? state.editedMessage : "";

  const [displayMessage, setDisplayMessage] = useState(true);

  useEffect(() => {
    if (deleteMessage) {
      const displayDuration = 5000; // 5 seconds (in milliseconds)

      const timer = setTimeout(() => {
        setDisplayMessage(false);

        // Clear the state from useLocation by replacing the URL
        window.history.replaceState(null, "");
      }, displayDuration);

      return () => {
        clearTimeout(timer);
      };
    }
    if (successMessage) {
      const displayDuration = 5000; // 5 seconds (in milliseconds)

      const timer = setTimeout(() => {
        setDisplayMessage(false);

        // Clear the state from useLocation by replacing the URL
        window.history.replaceState(null, "");
      }, displayDuration);

      return () => {
        clearTimeout(timer);
      };
    }
    if (editedMessage) {
      const displayDuration = 5000; // 5 seconds (in milliseconds)

      const timer = setTimeout(() => {
        setDisplayMessage(false);

        // Clear the state from useLocation by replacing the URL
        window.history.replaceState(null, "");
      }, displayDuration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [deleteMessage, successMessage, editedMessage]);

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_0px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <BookNav />
          {displayMessage && (
            <div className="w-full  flex justify-center items-center">
              <h3
                className={`${
                  successMessage &&
                  "w-full flex justify-center items-center bg-green-700 text-white font-semibold py-2 mb-3"
                } ${
                  deleteMessage &&
                  "w-full flex justify-center items-center bg-red-700 text-white font-semibold py-2 mb-3"
                } ${
                  editedMessage &&
                  "w-full flex justify-center items-center bg-green-700 text-white font-semibold py-2 mb-3"
                }`}
              >
                {successMessage && successMessage}
                {deleteMessage && deleteMessage}
                {editedMessage && editedMessage}
              </h3>
            </div>
          )}

          <BooksContainer />
        </div>
      </div>
    </main>
  );
};

export default Home;
