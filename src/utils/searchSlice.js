import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cacheItems: {},
  },
  reducers: {
    cacheItems: (state, action) => {
      state.cacheItems = { ...state.cacheItems, ...action.payload };
    },
  },
});

export const { cacheItems } = searchSlice.actions;

export default searchSlice.reducer;
