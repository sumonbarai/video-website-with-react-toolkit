import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sliceStart: 0,
  sliceEnd: process.env.REACT_APP_PAGINATE_PER_PAGE,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    paginate: (state, action) => {
      state.sliceStart =
        process.env.REACT_APP_PAGINATE_PER_PAGE * action.payload;
      state.sliceEnd =
        process.env.REACT_APP_PAGINATE_PER_PAGE * (action.payload + 1);
    },
  },
});

export default paginationSlice.reducer;
export const { paginate } = paginationSlice.actions;
