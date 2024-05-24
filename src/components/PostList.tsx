"use client";

import { useMemo, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { weekdays } from "@/constant/postData";
import { IRootState } from "@/redux/store";

export default function PostList() {
  const [selectedWeekdays, setSelectedWeekdays] = useState<string[]>([]);
  const router = useRouter();
  const postData = useSelector((state: IRootState) => state.postSlices.posts);

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

  const onSelectFilter = (day: string) => {
    if (selectedWeekdays.includes(day)) {
      const rslt = selectedWeekdays.filter((item) => {
        return item !== day;
      });
      setSelectedWeekdays(rslt);
    } else {
      setSelectedWeekdays([...selectedWeekdays, day]);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-[70%] overflow-y-auto p-4 rounded-lg">
      <div className="text-xl">Post list</div>
      <div className="flex gap-3">
        {weekdays.map((day) => (
          <div
            key={day}
            onClick={() => onSelectFilter(day)}
            className={`border-2 rounded-lg p-2 ${
              selectedWeekdays.includes(day) ? "bg-blue-400 text-white" : ""
            } `}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {filteredData.map((item: any) => {
          return (
            <div
              key={item.id}
              onClick={() => router.push(`/post/${item.id}`)}
              className="flex justify-between shadow-lg p-4 hover:border-[1px] cursor-pointer rounded"
            >
              <div>
                <div className="text-xl font-semibold text-gray-400">{`Posted on : ${item.posted_on}`}</div>
                <p>{item?.text}</p>
              </div>
              <RemoveBtn id={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
