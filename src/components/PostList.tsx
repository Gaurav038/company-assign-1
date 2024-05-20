"use client";

import { useState } from "react";
import { Button, Card, Checkbox, Select } from "antd";
import RemoveBtn from "./RemoveBtn";
import moment from "moment";
import usePosts from "../hooks/usePosts";
import Loader from "react-js-loader";

const { Option } = Select;

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function PostList() {
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);
  const { posts, isLoading, isError } = usePosts(selectedWeekdays);

  if (isLoading)
    return (
      <div className="flex w-full h-full items-center justify-center">
        <Loader
          type="spinner-default"
          bgColor="blue"
          color="grey"
          title={"Loading"}
          size={100}
        />
      </div>
    );
  if (isError) return <div>Error loading posts</div>;

  return (
    <div className="flex flex-col gap-4 w-[70%] overflow-y-auto p-5 rounded-lg">
      <div className="text-xl">Post list</div>
      <Select
        mode="multiple"
        style={{ width: "30%" }}
        placeholder="Select weekdays"
        onChange={setSelectedWeekdays}
        value={selectedWeekdays}
      >
        {weekdays.map((day) => (
          <Option key={day} value={day}>
            {day}
          </Option>
        ))}
      </Select>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((item: any) => {
          return (
            <Card
              hoverable={true}
              key={item._id}
              className="shadow-lg"
              title={`Posted on : ${moment(item.createdAt).format(
                "dddd"
              )}, ${moment(item.createdAt).format("DD MMM YYYY")}`}
              bordered={true}
            >
              <p>{item?.content}</p>
              <RemoveBtn id={item._id} />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
