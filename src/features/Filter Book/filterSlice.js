import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: "all",
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags = action.payload;
    },
    search: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, search } = filterSlice.actions;
