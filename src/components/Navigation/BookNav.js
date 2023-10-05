import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tagSelected } from "../../features/Filter Book/filterSlice";

const BookNav = () => {
  const { tags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${tags === "all" ? "active-filter" : ""}`}
          id="lws-filterAll"
          onClick={() => dispatch(tagSelected("all"))}
        >
          All
        </button>
        <button
          className={`filter-btn ${tags === "featured" ? "active-filter" : ""}`}
          id="lws-filterFeatured"
          onClick={() => dispatch(tagSelected("featured"))}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookNav;
