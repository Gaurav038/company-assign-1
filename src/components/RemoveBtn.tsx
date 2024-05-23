"use client";

import { deletePost } from "@/redux/slices/postSlices";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function RemoveBtn({ id }: any) {
  const userAuth = useSelector((state) => state.userAuthSlice.isAuth);

  const dispatch = useDispatch();
  const removeTopic = async (e: any) => {
    e.stopPropagation();

    if (!userAuth) {
      alert("Authentiation required.");
      return;
    } else {
      const confirmed = confirm("Are you sure?");

      if (confirmed) {
        dispatch(deletePost(id));
      }
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
