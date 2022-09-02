import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTag: [],
  inputText: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.selectedTag.push(action.payload);
    },

    removeTag: (state, action) => {
      const indexToRemove = state.selectedTag.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.selectedTag.splice(indexToRemove, 1);
      }
    },

    searched: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { addTag, removeTag, searched } = filterSlice.actions;
