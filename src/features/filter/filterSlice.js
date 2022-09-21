import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTag: [],
  inputText: "",
  authorName: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.selectedTag.push(action.payload);
      state.authorName = "";
    },

    removeTag: (state, action) => {
      const indexToRemove = state.selectedTag.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.selectedTag.splice(indexToRemove, 1);
      }
      state.authorName = "";
    },

    searched: (state, action) => {
      state.inputText = action.payload;
      state.authorName = "";
    },

    searchedBytAuthor: (state, action) => {
      state.authorName = action.payload;
      state.inputText = "";
      state.selectedTag = [];
    },

    reset: (state, action) => {
      state.selectedTag = [];
      state.inputText = "";
      state.authorName = "";
    },
  },
});

export default filterSlice.reducer;
export const { addTag, removeTag, searched, reset, searchedBytAuthor } =
  filterSlice.actions;
