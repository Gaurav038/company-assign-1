"use client";

import React, { useState } from "react";
import { Button, Form, Input, Select, Space } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Option } = Select;

function page() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log(values);

    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", values);
      console.log("Login success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full">
      <div className="text-[25px] font-semibold">SignUp Page</div>
      <Form
        name="basic"
        className="border-1 border-gray-500 shadow-xl rounded-lg !p-10"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <div
          className="text-sm cursor-pointer p-3"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login Page
        </div>
      </Form>
    </div>
  );
}

export default page;
