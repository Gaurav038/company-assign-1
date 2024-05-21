"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import LoaderItem from "@/components/Loader";

const PostDetails = ({ params }: any) => {
  const { id } = params;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);

  useEffect(() => {
    const getPostById = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch Post");
        }

        const postData = await res.json();
        setPost(postData?.post);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getPostById();
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      {loading ? (
        <LoaderItem />
      ) : (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">POST</div>
            <p className="text-gray-700 text-base">{post?.content}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {`Posted on : ${moment(post?.createdAt).format("dddd")}, ${moment(
                post?.createdAt
              ).format("DD MMM YYYY")}`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
