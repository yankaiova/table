import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk(
  "message/fetchMessages",
  async function () {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?_limit=200"
      );
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    message: [],
    status: null,
    error: null,
    tablePerPage: 10,
    currentPage: 1,
  },
  reducers: {
    onNavigateNext(state) {
      state.currentPage++;
    },
    onNavigatePrev(state) {
      state.currentPage--;
    },
    onChangeTablePerpage(state, action) {
      state.tablePerPage = action.payload;
    },
    onClickCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    increment(state) {
      state.tablePerPage++;
    },
    decrement(state) {
      state.tablePerPage--;
    },
  },
  extraReducers: {
    [fetchMessages.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchMessages.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.message = action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const {
  onNavigateNext,
  onNavigatePrev,
  onChangeTablePerpage,
  onClickCurrentPage,
  increment,
  decrement,
  onSignIn,
} = toolkitSlice.actions;
