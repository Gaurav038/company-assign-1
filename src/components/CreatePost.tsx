"use client";

import React, { useState } from "react";
import { Button, Input, notification } from "antd";
import { createPost } from "@/actions/post";
import usePosts from "@/hooks/usePosts";

const { TextArea } = Input;

function CreatePost() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutate } = usePosts();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string) => {
    api.warning({
      message: "Warning",
      description: message,
      duration: 3,
    });
  };

  const successNotification = (message: string) => {
    api.success({
      message: "Success",
      description: message,
      duration: 3,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!value) {
      setLoading(false);
      alert("content are required.");
      return;
    }

    try {
      const rslt = await createPost(value);
      successNotification("create successFully!")
      setValue("");
      mutate();
    } catch (error: any) {
      console.log(error?.message);
      openNotification(error?.message);
    }
    setLoading(false);
  };

  return (
    <>
      {contextHolder}
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
              loading={loading}
              iconPosition="end"
              onClick={handleSubmit}
            >
              Save Post
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
