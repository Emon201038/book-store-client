import React from "react";
import Form from "./Form";

const AddBook = () => {
  return (
    <div className="">
      <div className="p-4 overflow-hidden  bg-slate-600 shadow-cardShadow rounded-md flex flex-col justify-center items-center">
        <h4 className="mb-2 text-xl font-bold text-center">Add New Book</h4>
        <div className="bg-slate-300 p-5 rounded-lg">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default AddBook;
