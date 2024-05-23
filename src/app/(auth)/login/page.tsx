"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/slices/userAuthSlice";

function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newParams = searchParams.get("redirectTo") || "/";
  const dispatch = useDispatch();

  const onSubmit = () => {
    localStorage.setItem("userAuth", "true");
    dispatch(logIn());
    router.push(newParams);
    router.refresh();
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full">
      <div className="border-1 border-gray-500 shadow-xl rounded-lg !p-10">
        <div className="text-[25px] font-semibold pb-10">Guest Login Page</div>
        <button
          onClick={onSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 "
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
