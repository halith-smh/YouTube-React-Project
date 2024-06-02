import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COMMENT_OFFSET } from "../../utils/constants";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    data: [],
  },
  reducers: {
    addLiveChat: (state, action) => {
      state.data.splice(LIVE_COMMENT_OFFSET, 1);
      state.data.unshift(action.payload);
    },
  },
});

export const { addLiveChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
