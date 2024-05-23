import { createSlice } from "@reduxjs/toolkit";
import { postData } from "@/constant/postData";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: postData,
  },
  reducers: {
    createPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
  },
});

export const { createPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
