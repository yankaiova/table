import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk(
  "message/fetchMessages",
  async function () {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=110"
    );
    const data = await response.data;
    return data;
  }
);

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 10,
    message: [1, 2, 3],
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
      state.count = state.count + 1;
      //  state.messages.push(action.payload);
    },
    decrement(state) {
      state.count = state.count - 1;
      //  state.messages.pop();
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
    [fetchMessages.rejected]: (state, action) => {},
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
} = toolkitSlice.actions;
