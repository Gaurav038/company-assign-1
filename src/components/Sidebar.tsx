"use client";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { Layout } from "antd";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];
const { Header, Content, Sider } = Layout;

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Home",
    icon: <MailOutlined />,
  },
  {
    key: "sub2",
    label: "About",
    icon: <AppstoreOutlined />,
  },
  {
    key: "sub4",
    label: "Login",
    icon: <SettingOutlined />,
  },
];

const App: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default App;
