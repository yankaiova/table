import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk(
  "message/fetchMessages",
  async function () {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.data;
    // console.log(data);
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
  },
  reducers: {
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
export const { increment, decrement } = toolkitSlice.actions;
