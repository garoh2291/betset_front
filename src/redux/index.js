import { configureStore } from "@reduxjs/toolkit";
import betSlice from "./BetSlice";

export default configureStore({
  reducer: {
    bet: betSlice,
  },
});
