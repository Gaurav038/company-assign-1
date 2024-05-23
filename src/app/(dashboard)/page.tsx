import PostList from "@/components/PostList";
import WeekStatus from "@/components/WeekStatus";

import CreatePost from "@/components/CreatePost";

export default function Home() {

  return (
    <div className="flex flex-col w-full p-8 gap-4 h-full">
       <CreatePost />
      <div className="flex w-full h-[500px] justify-between bg-white p-4">
        <PostList />
        <WeekStatus />
      </div>
    </div>
  );
}
