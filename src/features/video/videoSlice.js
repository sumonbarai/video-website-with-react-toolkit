import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getSingleVideo, { updateLike } from "./videoAPI";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchVideoThunk = createAsyncThunk(
  "video/fetchVideoThunk",
  async (id) => {
    const videos = await getSingleVideo(id);
    return videos;
  }
);
export const likeIncreaseThunk = createAsyncThunk(
  "video/likeIncreaseThunk",
  async ({ id, data }) => {
    const result = await updateLike(id, data);
    return result;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideoThunk.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.video = action.payload;
        state.error = "";
      })
      .addCase(fetchVideoThunk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.video = {};
        state.error = action.error?.message;
      })
      .addCase(likeIncreaseThunk.fulfilled, (state, action) => {
        state.video.likes++;
      });
  },
});

export default videoSlice.reducer;
export const { likeIncrease, likeDecrease } = videoSlice.actions;
