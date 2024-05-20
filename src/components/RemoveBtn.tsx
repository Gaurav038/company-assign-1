"use client";

import { deletePost } from "@/actions/post";
import usePosts from "@/hooks/usePosts";
import { Button, notification } from "antd";

export default function RemoveBtn({ id }: any) {
  const { mutate } = usePosts();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Notification Title",
      description:
        "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
      duration: 3,
    });
  };
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        await deletePost(id);
        mutate();
      } catch (error: any) {
        console.log(error?.message);
        openNotification()
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
