"use client";

import { deletePost } from "@/actions/post";
import usePosts from "@/hooks/usePosts";
import { Button } from "antd";

export default function RemoveBtn({ id }) {
  const { mutate } = usePosts();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      await deletePost(id);
      mutate()
    }
  };

  return (
    <Button
      className="flex justify-end float-end"
      type="primary"
      danger
      ghost
      loading={false}
      iconPosition="end"
      onClick={removeTopic}
    >
      Delete
    </Button>
  );
}
