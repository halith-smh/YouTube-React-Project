import { createSlice } from "@reduxjs/toolkit";

const popularVideo = createSlice({
  name: "popularVideo",
  initialState: {
    data: null,
  },
  reducers: {
    addPopulaVideo: (state, action) => {
      state.data = action.payload.items;
    },
  },
});

export const {addPopulaVideo} = popularVideo.actions;

export default popularVideo.reducer;
