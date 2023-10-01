import React from "react";
import MainNav from "./main/MainNav";
import BookList from "./main/BookList";

const Main = () => {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_0px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <MainNav />
          <BookList />
        </div>
      </div>
    </main>
  );
};

export default Main;
