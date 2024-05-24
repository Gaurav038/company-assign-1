"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { createPost } from "@/redux/slices/postSlices";
import { IRootState } from "@/redux/store";

function CreatePost() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { userAuthSlice } = useSelector((state: IRootState) => state);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!userAuthSlice.isAuth) {
      alert("Authentiation required.");
      setValue("");
      return;
    }
    if (!value) {
      alert("content are required.");
      return;
    }
    const post = {
      text: value,
      id: Date.now() + Math.random(),
      posted_on: `${moment(new Date()).format("ddd")} ${moment(
        new Date()
      ).format("MMM DD YYYY")}`,
    };
    dispatch(createPost(post));
    setValue("");
  };

  return (
    <div className="flex flex-col justify-center mx-auto w-3/4 gap-4">
      <h1 className="text-xl">Create Post</h1>
      <div className="flex flex-col gap-2 justify-center ">
        <textarea
          className="p-3 rounded-lg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="write post..."
        />
        <div>
          <button
            className="flex justify-end float-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5"
            onClick={handleSubmit}
          >
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
