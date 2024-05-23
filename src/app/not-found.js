"use client"

import { useRouter } from "next/navigation";
import React from "react";

function Notfound() {
  const router = useRouter();
  return (
    <div className="flex flex-col text-4xl items-start justify-center w-full h-screen">
      <div>Page not-found</div>
      <div className="cursor-pointer" onClick={() => router.push("/")}>Click here Home Page</div>
    </div>
  );
}

export default Notfound;
