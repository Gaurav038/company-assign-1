import { Input, Button, Card, Divider, List, Typography } from "antd";
import { useState } from "react";
import PostList from "@/components/PostList";
import WeekStatus from "@/components/WeekStatus";
import { useRouter } from "next/navigation";
import axios from "axios";
import CreatePost from "@/components/CreatePost";

const { TextArea } = Input;
export default function Home() {

  return (
    <div className="flex flex-col w-full p-8 gap-4 h-full">
      <CreatePost />
      <div className="flex w-full h-[500px] bg-white p-4">
        <PostList />
        <WeekStatus />
      </div>
    </div>
  );
}
