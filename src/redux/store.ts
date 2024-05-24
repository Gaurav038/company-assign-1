import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "@/redux/slices/userAuthSlice";
import postSlices from "./slices/postSlices";

export const store = configureStore({
  reducer: { userAuthSlice, postSlices },
});


export type IRootState = ReturnType<typeof store.getState>
