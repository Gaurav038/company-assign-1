"use client";

import { deletePost } from "@/actions/post";
import usePosts from "@/hooks/usePosts";
import { Button, notification } from "antd";

export default function RemoveBtn({ id }: any) {
  const { mutate } = usePosts();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string) => {
    api.warning({
      message: "Warning",
      description: message,
      duration: 3,
    });
  };

  const removeTopic = async (e: any) => {
    e.stopPropagation();

    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        await deletePost(id);
        mutate();
      } catch (error: any) {
        console.log(error?.message);
        openNotification(error?.message)
      }
    }
  };

  return (
    <>
      {contextHolder}
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
    </>
  );
}
