"use client"
import { Divider, List, Typography } from "antd";

function WeeklyDataList({weekdayCount}: any) {
    
  return (
    <List
      bordered
      dataSource={weekdayCount}
      renderItem={(item: any) => {
        const [day, count] = Object.entries(item)[0]; 
       return <List.Item>
          <Typography.Text mark>[{count}]</Typography.Text> | {day}
        </List.Item>
      }}
    />
  );
}

export default WeeklyDataList;
