"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button, Input } from "antd";
import { revalidateTag } from "next/cache";
import { createPost} from "@/actions/post";
import usePosts from "@/hooks/usePosts";

const { TextArea } = Input;

function CreatePost() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false)
  const { mutate } = usePosts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!value) {
        setLoading(false)
      alert("content are required.");
      return;
    }

    try {
      await createPost(value);
      setValue("");
      mutate()
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };
  return (
    <div className="w-full flex flex-col justify-center px-16 gap-4">
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
            loading={loading}
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
