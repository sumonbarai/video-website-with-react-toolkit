import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideos from "./relatedVideosAPI";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchRelatedVideosThunk = createAsyncThunk(
  "relatedVideos/fetchRelatedVideosThunk",
  async ({ currentId, tags }) => {
    const relatedVideos = await getRelatedVideos(currentId, tags);
    return relatedVideos;
  }
);
const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideosThunk.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.relatedVideos = action.payload;
        state.error = "";
      })
      .addCase(fetchRelatedVideosThunk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
