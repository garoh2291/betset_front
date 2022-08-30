import { createSlice } from "@reduxjs/toolkit";

const betSlice = createSlice({
  name: "bet",
  initialState: {
    games: [],
    error: null,
    status: null,
  },
  reducers: {},
});

export default betSlice.reducer;
