import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTag from "./tagsAPI";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchTagsThunk = createAsyncThunk(
  "tags/fetchTagsThunk",
  async () => {
    const tags = await getTag();
    return tags;
  }
);
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTagsThunk.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.tags = action.payload;
        state.error = "";
      })
      .addCase(fetchTagsThunk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.tags = [];
        state.error = action.error?.message;
      });
  },
});

export default tagsSlice.reducer;
