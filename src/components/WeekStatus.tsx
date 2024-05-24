"use client";

import { IRootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function WeekStatus() {
  const postsData = useSelector((state: IRootState) => state.postSlices.posts);
  const weekdayCount: any = {
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
  };

  postsData.forEach((item: any) => {
    weekdayCount[item.posted_on.substr(0, 3)]++;
  });

  return (
    <div className="w-[25%] min-w-[100px]">
      <div className="py-2">Weekly Data</div>

      {Object.keys(weekdayCount).map((item) => {
        return (
          <div className="p-2 border-2 rounded-lg" key={item}>
            {item} | {weekdayCount[item]}
          </div>
        );
      })}
    </div>
  );
}
