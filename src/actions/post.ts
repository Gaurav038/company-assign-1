"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export async function createPost(data: any) {
  const body = JSON.stringify({ content: data });
  
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body,
    headers: { Cookie: cookies().toString() }, 
    // to send cookies we need to add this for server side call
  });
  if(!response.ok){
    let data = await response.json()    
    throw new Error(data?.error)
  }
  revalidateTag("post-lists");
}

export async function deletePost(id: any) {
  const response = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
    method: "DELETE",
    headers: { Cookie: cookies().toString() }, 
  });
  if(!response.ok){
    let data = await response.json()    
    throw new Error(data?.error)
  }
  revalidateTag("post-lists");
}
