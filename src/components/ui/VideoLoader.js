import React from "react";

const VideoLoader = () => {
  return (
    <div className="book-cards w-[400px] h-[300] ">
      <div className="flex justify-center items-center ">
        <div className="w-2/5 h-[250px] p-[2px] animate-pulse bg-slate-400 rounded "></div>
        <div className="w-3/5 h-[250px]">
          <div className="flex justify-end items-end">
            <div className="w-[20px] h-[10px] animate-pulse bg-slate-400 rounded m-[5px]"></div>
            <div className="w-[20px] h-[10px] animate-pulse bg-slate-400 rounded m-[5px]"></div>
          </div>
          <div className="w-11/12 h-[10px] mt-[30px] mx-[10px] bg-slate-400 rounded animate-pulse"></div>
          <div className="w-2/3 h-[10px] mt-[10px] mx-[10px] bg-slate-400 rounded animate-pulse"></div>
          <div className="flex justify-start items-start  mt-[30px]">
            <div className=" animate-pulse  m-[5px] bg-slate-400 rounded"></div>
            <div className="w-[15px] h-[20px] animate-pulse bg-slate-400 rounded m-[5px]"></div>
            <div className="w-[15px] h-[20px] animate-pulse bg-slate-400 rounded m-[5px]"></div>
            <div className="w-[15px] h-[20px] animate-pulse bg-slate-400 rounded m-[5px]"></div>
          </div>
          <div className="w-1/3 h-[10px] animate-pulse bg-slate-400 rounded mx-[10px] mt-[20px]"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoLoader;
