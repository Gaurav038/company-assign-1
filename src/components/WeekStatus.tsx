"use server";

import { Divider, List, Typography } from "antd";
import WeeklyDataList from "./WeeklyDataList";

const getWeeklyStatus = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      next: { tags: ["post-lists"] },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function WeekStatus() {
  const { posts } = await getWeeklyStatus();

  const weekdayCount: any = [
    { Sunday: 0 },
    { Monday: 0 },
    { Tuesday: 0 },
    { Wednesday: 0 },
    { Thursday: 0 },
    { Friday: 0 },
    { Saturday: 0 },
  ];

  let dayRecords: any = {};
  posts.forEach((item: any) => {
    if (dayRecords[item.currentDay]) {
      dayRecords[item.currentDay] += 1;
    } else {
      dayRecords[item.currentDay] = 1;
    }
  });
  for (const dayName in dayRecords) {
    const index = weekdayCount.findIndex(
      (item: any) => Object.keys(item)[0] === dayName
    );
    if (index !== -1) {
      weekdayCount[index][dayName] = dayRecords[dayName];
    }
  }

  return (
    <div className="w-[20%] min-w-20">
      <Divider orientation="left">Weekly Data</Divider>
      <WeeklyDataList weekdayCount={weekdayCount} />
    </div>
  );
}
