import React from "react";
import BookNav from "../Navigation/BookNav";
import BooksContainer from "../Books/BooksContainer";

const Home = () => {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_0px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <BookNav />
          <BooksContainer />
        </div>
      </div>
    </main>
  );
};

export default Home;
