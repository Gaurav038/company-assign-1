"use client";
import { AboutDatas } from "@/constant/aboutData";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const getInfoByoptionsId = (id: any) => {
  for (const data of AboutDatas.options) {
    if (data.id == id) {
      return data.info;
    }
  }
  return null
};

const checkInfoData = (infoData: any, secondSelect: any) => {
  for(const item of infoData){
    if(item.id == secondSelect){
      return true
    }
  }
  return false
}
function page({ params }: any) {
  const router = useRouter();
  const firstSelect: any = params.aboutItem?.[0];
  const secondSelect: any = params?.aboutItem?.[1];

  const infoData = getInfoByoptionsId(firstSelect);

  if(!infoData || (secondSelect && !checkInfoData(infoData, secondSelect))){ 
    console.log(infoData);
           
    router.push(`/about/1`)
  }

  return (
    <div className="flex flex-col gap-8 h-full w-full p-8">
      <div className="flex justify-center text-[34px] font-bold">About</div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6">
          {AboutDatas?.options?.map((item) => {
            return (
              <div
                onClick={() => {
                  router.push(`/about/${item?.id}`);
                }}
                className={`p-4 mb-2 cursor-pointer rounded 
            ${
              item?.id == firstSelect
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-100 text-black"
            }`}
              >
                {item?.name}
              </div>
            );
          })}
        </div>

        <div className="p-6">
          {infoData?.map((item) => {
            return (
              <div
                onClick={() => {
                  router.push(`/about/${firstSelect}/${item?.id}`);
                }}
                className={`p-4 mb-2 cursor-pointer rounded 
            ${
              item?.id == secondSelect
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-100 text-black"
            }`}
              >
                {item?.name}
              </div>
            );
          })}
        </div>
        {secondSelect && (
          <div className="flex gap-3 flex-col items-center justify-center">
            <div className="text-[24px] font-semibold">Details</div>
            <div>
              {firstSelect} | {secondSelect}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
