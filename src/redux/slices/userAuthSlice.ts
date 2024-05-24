import { createSlice } from "@reduxjs/toolkit";

let sessionData;
if (typeof window !== "undefined") {
  localStorage.getItem("userAuth");
}
const initialState = {
  isAuth: !!sessionData,
};

console.log(initialState);

export const userAuthAlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true;
    },
    logOut: (state) => {
      state.isAuth = false;
    },
  },
});

export const { logIn, logOut } = userAuthAlice.actions;
export default userAuthAlice.reducer;
