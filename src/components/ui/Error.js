import React from "react";

const Error = ({ message, error }) => {
  return (
    <div className="flex  justify-center items-center text-red-600 w-full">
      <h3 className="absolute top-[300px] lg:left-[40%] right-[50%] md:left-[35%] sm:left-[35%]  max-sm:left-[35%] w-[300px] lg:w-[500px] md:w-[400px] font-semibold">
        {message}.{error}
      </h3>
    </div>
  );
};

export default Error;
