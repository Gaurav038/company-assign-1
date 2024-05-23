"use client";

import React, { useState } from "react";
import { Button, Input} from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { createPost } from "@/redux/slices/postSlices";

const { TextArea } = Input;

function CreatePost() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { userAuthSlice}= useSelector((state: any) => state);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(!userAuthSlice.isAuth){
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
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="write post..."
        />
        <div>
          <Button
            className="flex justify-end float-end"
            type="primary"
            iconPosition="end"
            onClick={handleSubmit}
          >
            Save Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
