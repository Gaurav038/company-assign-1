"use client";

import { useEffect, useMemo, useState } from "react";
import { Button, Card, Checkbox, Select } from "antd";
import RemoveBtn from "./RemoveBtn";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { weekdays } from "@/constant/postData";

const { Option } = Select;

export default function PostList() {
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);
  const router = useRouter();
  const postData = useSelector((state) => state.postSlices.posts);
  // const [filteredData, setFilteredData] = useState([]);

  const filteredData = useMemo(() => {
    if (selectedWeekdays.length > 0) {
      const updatedData = [...postData].filter((item: any) =>
        selectedWeekdays.includes(item.posted_on.substr(0, 3))
      );
      return updatedData;
    } else {
      return [...postData];
    }
  }, [selectedWeekdays, postData]);

  return (
    <div className="flex flex-col gap-4 w-[70%] overflow-y-auto p-4 rounded-lg">
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

      <div className="grid grid-cols-1 gap-4">
        {filteredData.map((item: any) => {
          return (
            <Card
              hoverable={true}
              key={item.id}
              onClick={() => router.push(`/post/${item.id}`)}
              className="shadow-lg"
              title={`Posted on : ${item.posted_on}`}
              bordered={true}
            >
              <p>{item?.text}</p>
              <RemoveBtn id={item.id} />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
