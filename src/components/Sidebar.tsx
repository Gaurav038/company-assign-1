"use client";

import { usePathname, useRouter } from "next/navigation";
import { MenuItems } from "@/constant/menuItem";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/redux/slices/userAuthSlice";
import { IRootState } from "@/redux/store";

const SideBar: React.FC = () => {
  const router = useRouter();
  const pathname: string = usePathname();
  const dispatch = useDispatch();
  const userAuth = useSelector(
    (state: IRootState) => state.userAuthSlice.isAuth
  );

  const onMenuItemClick = (path: string) => {
    if (path !== "/logout") {
      router.push(path);
    } else {
      localStorage.clear();

      dispatch(logOut());
    }
  };

  return (
    <div className="flex flex-col gap-2 border-r-2 border-gray-400 w-[10%]">
      <div className="flex flex-col items-center pt-12">
        {MenuItems.map((item) => {
          if (userAuth && item.label === "Login") {
            return null;
          } else if (!userAuth && item.label === "Logout") {
            return null;
          }
          return (
            <div
              key={item.label}
              onClick={() => onMenuItemClick(item?.key)}
              className={`py-4 flex gap-3 hover:text-green-500 cursor-pointer ${
                item?.key === pathname ? "text-green-700 font-semibold" : ""
              }`}
            >
              {item?.icon}
              <div>{item?.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
