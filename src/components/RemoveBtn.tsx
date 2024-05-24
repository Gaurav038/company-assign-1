"use client";

import { deletePost } from "@/redux/slices/postSlices";
import { IRootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function RemoveBtn({ id }: any) {
  const userAuth = useSelector((state: IRootState) => state.userAuthSlice.isAuth);

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
    <button
      className="flex items-center text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-3"
      onClick={removeTopic}
    >
      Delete
    </button>
  );
}
