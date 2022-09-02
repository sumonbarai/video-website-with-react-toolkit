import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideo from "./videosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchVideosThunk = createAsyncThunk(
  "videos/fetchVideosThunk",
  async ({ selectedTag, inputText }) => {
    const videos = await getVideo(selectedTag, inputText);
    return videos;
  }
);
const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideosThunk.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.videos = action.payload;
        state.error = "";
      })
      .addCase(fetchVideosThunk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.videos = [];
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
