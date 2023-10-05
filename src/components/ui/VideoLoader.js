import React from "react";

const VideoLoader = () => {
  return (
    <div className="book-cards w-[400px] md:w-[350] h-[300] ">
      <div className="flex justify-center items-center ">
        <div className="thumbnaul w-2/5 h-[250px] p-[2px] animate-pulse bg-slate-400 rounded "></div>
        <div className="book-details w-3/5 md:w-3/6 h-[250px]">
          <div className="ediit-delete-logo flex justify-end   items-end">
            <div className="edit w-[20px] h-[20px] animate-pulse bg-slate-400 rounded m-[5px]"></div>
            <div className="delete w-[20px] h-[20px] animate-pulse bg-slate-400 rounded m-[5px]"></div>
          </div>
          <div className="1st-name w-11/12 md:w-9/12 h-[12px] mt-[30px] mx-[10px] bg-slate-400 rounded animate-pulse"></div>
          <div className="2nd-name w-2/3 h-[12px] mt-[10px] mx-[10px] bg-slate-400 rounded animate-pulse"></div>
          <div className="w-2/5 h-[12px] mt-[30px] mx-[10px] bg-slate-400 rounded animate-pulse"></div>
          <div className="flex justify-start items-start  mt-[20px] ml-[15px]">
            <div className=" animate-pulse  my-[5px] mr-[5px] bg-slate-400 rounded"></div>
            <div className="w-[12px] h-[12px] animate-pulse bg-slate-400 rounded my-[5px] mr-[5px]"></div>
            <div className="w-[12px] h-[12px] animate-pulse bg-slate-400 rounded my-[5px] mr-[5px]"></div>
            <div className="w-[12px] h-[12px] animate-pulse bg-slate-400 rounded my-[5px] mr-[5px]"></div>
            <div className="w-[12px] h-[12px] animate-pulse bg-slate-400 rounded my-[5px] mr-[5px]"></div>
            <div className="w-[12px] h-[12px] animate-pulse bg-slate-400 rounded my-[5px] mr-[5px]"></div>
          </div>
          <div className="w-1/4 h-[12px] animate-pulse bg-slate-400 rounded mx-[10px] mt-[15px]"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoLoader;
