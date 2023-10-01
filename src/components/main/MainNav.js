import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tagSelected } from "../../features/filter/filterSlice";

const MainNav = () => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const handleFilterAll = () => {
    setFilter("all");
    dispatch(tagSelected("all"));
  };
  const handleFilterFeatured = () => {
    setFilter("featured");
    dispatch(tagSelected("featured"));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          class={filter === "all" ? `filter-btn active-filter` : `filter-btn`}
          id="lws-filterAll"
          onClick={handleFilterAll}
        >
          All
        </button>
        <button
          class={
            filter === "featured" ? `filter-btn active-filter` : `filter-btn`
          }
          id="lws-filterFeatured"
          onClick={handleFilterFeatured}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default MainNav;
