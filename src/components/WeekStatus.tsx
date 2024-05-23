"use client";

import { Divider } from "antd";
import { useSelector } from "react-redux";

export default function WeekStatus() {
  const postsData = useSelector((state) => state.postSlices.posts);
  const weekdayCount: any = {
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
  };

  postsData.forEach((item) => {
    weekdayCount[item.posted_on.substr(0, 3)]++;
  });

  
  return (
    <div className="w-[25%] min-w-[100px]">
      <Divider orientation="left">Weekly Data</Divider>

      {Object.keys(weekdayCount).map((item) => {
        return (
          <div>
            {item} : {weekdayCount[item]}
          </div>
        );
      })}
    </div>
  );
}
