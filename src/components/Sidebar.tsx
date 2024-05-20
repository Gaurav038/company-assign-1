"use client";

import { getDataFromToken } from "@/helpers/getDataFromToken";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const App: React.FC = () => {
  const router = useRouter();
  const pathname: string = usePathname();
  const [userData, setuserData] = useState(null);
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    if (e.key != "/logout") {
      router.push(e.key);
    }
  };
  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      setuserData(res.data.data._id);
    } catch (error) {
      setuserData(null);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  const items: MenuItem[] = [
    {
      key: "/",
      label: "Home",
      icon: <MailOutlined />,
    },
    {
      key: "/about/1",
      label: "About",
      icon: <AppstoreOutlined />,
    },
    !userData && {
      key: "/login",
      label: "Login",
      icon: <SettingOutlined />,
    },
    userData && {
      key: "/logout",
      label: "Logout",
      icon: <SettingOutlined />,
      onClick: logout,
    },
  ];
  return (
    <Menu
      onClick={onClick}
      style={{ width: "200px" }}
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={[pathname]}
      mode="inline"
      items={items}
    />
  );
};

export default App;
