import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const liveChat = createSlice({
  name: "liveChat",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.splice(OFFSET_LIVE_CHAT - 1, 1);
      state.unshift(action.payload);
    },
  },
});

export const { addMessage } = liveChat.actions;

export default liveChat.reducer;
