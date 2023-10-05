import React from "react";

const Loading = ({ message }) => {
  return (
    <div className="flex justify-center items-center text-red-600 font-bold">
      <h3>{message}</h3>
    </div>
  );
};

export default Loading;
