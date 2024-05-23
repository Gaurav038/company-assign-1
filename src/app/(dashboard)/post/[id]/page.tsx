"use client";

import { redirectPath } from "@/utils/redirectPath";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PostDetails = ({ params }: any) => {
  const { id } = params;
  const [post, setPost] = useState({});
  const { postSlices, userAuthSlice } = useSelector((state: any) => state);
  const router = useRouter();
  const pathname: string = usePathname();

  if (!userAuthSlice.isAuth) {
    redirectPath(pathname, router);
  }
  useEffect(() => {
    const rslt = postSlices.posts.find((item) => {
      return item.id == id;
    });
    setPost(rslt);
  }, [id]);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">POST</div>
          <p className="text-gray-700 text-base">{post?.text}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {post.posted_on}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
