"use client";
import { AboutDatas } from "@/constant/aboutData";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { checkInfoData, getInfoByoptionsId } from "@/utils/about";
import { redirectPath } from "@/utils/redirectPath";
import { IRootState } from "@/redux/store";

interface AboutPageProps {
  params: { [key: string]: string[] | undefined };
}

function AboutPage({ params }: AboutPageProps) {
  const userData = useSelector(
    (state: IRootState) => state.userAuthSlice.isAuth
  );
  const firstSelect = params?.aboutItem?.[0];
  const secondSelect = params?.aboutItem?.[1];
  const pathname: string = usePathname();
  const router = useRouter();

  const infoData = getInfoByoptionsId(firstSelect);
  if (!userData) {
    redirectPath(pathname, router);
  }
  if (!infoData || (secondSelect && !checkInfoData(infoData, secondSelect))) {
    router.push(`/about/1`);
  }

  return (
    <div className="flex flex-col gap-8 h-full w-full p-8">
      <div className="flex justify-center text-[34px] font-bold">About</div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6">
          {AboutDatas?.options?.map((item: any) => {
            return (
              <div
                key={item?.id}
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
                key={item?.id}
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

export default AboutPage;
