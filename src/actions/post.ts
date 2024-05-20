"use server";

import { revalidateTag } from "next/cache";

export async function createPost(data: any) {
  const body = JSON.stringify({ content: data });

  await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body,
  });
  revalidateTag("post-lists");
}

export async function deletePost(id: any) {
  await fetch(`http://localhost:3000/api/posts?id=${id}`, {
    method: "DELETE",
  });
  revalidateTag("post-lists");

}
