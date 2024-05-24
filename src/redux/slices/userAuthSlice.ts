import { createSlice } from "@reduxjs/toolkit";

const sessionData = localStorage.getItem("userAuth");

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
