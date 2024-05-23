import {
    DatabaseOutlined,
    HomeOutlined,
    LoginOutlined,
    LogoutOutlined,
  } from "@ant-design/icons";


export const MenuItems = [
    {
      key: "/",
      label: "Home",
      icon: <HomeOutlined />,
    },
    {
      key: "/about/1",
      label: "About",
      icon: <DatabaseOutlined />,
    },
    {
      key: "/login",
      label: "Login",
      icon: <LoginOutlined />,
    },
    {
      key: "/logout",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];