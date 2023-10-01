import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: "all",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags = action.payload;
    },
    searchValue: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { searchValue, tagSelected } = filterSlice.actions;
