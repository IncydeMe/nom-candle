"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

import ProductBackground from "../../../../public/images/ProductBackground.png";
import { login } from "@/utils/login";

import { useToast } from "@/components/ui/use-toast";

const LoginBody = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const signupData = {
        email: formData.email,
        password: formData.password,
      };
      const response = await login(signupData);
      toast({
        description: "Đăng nhập thành công",
        duration: 3000,
      });
      localStorage.setItem("access-token", response.accessToken);
      window.location.replace("/");
    } catch (error) {
      toast({
        description: "Sai email hoặc mật khẩu",
        duration: 3000,
      });
    }
  };

  return (
    <section className="text-[#C6613D]">
      <h1 className="text-[36px] font-bold uppercase py-2">Đăng nhập</h1>
      <h4 className="text-[24px] font-bold">
        Chào mừng bạn, vui lòng đăng nhập để tiếp tục
      </h4>
      <section className="flex justify-between items-center gap-4">
        <section className="w-[560px]">
          <form onSubmit={handleSubmit}>
            <div className="py-2">
              <Label htmlFor="email" className="pb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Vui lòng nhập email của bạn"
                value={formData.email}
                onChange={handleChange}
                className="rounded-[4px]"
              />
            </div>
            <div className="py-2">
              <Label htmlFor="password" className="pb-2">
                Mật khẩu
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Vui lòng nhập mật khẩu của bạn"
                value={formData.password}
                onChange={handleChange}
                className="rounded-[4px]"
              />
            </div>
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <Checkbox id="remember" name="remember" />
                <Label htmlFor="remember" className="text-[16px] font-normal">
                  Ghi nhớ tài khoản
                </Label>
              </div>
              <Link
                href="/forgot-password"
                className="text-[#C6613D] font-semibold text-[16px]"
              >
                Quên mật khẩu?
              </Link>
            </div>
            <Button
              type="submit"
              className="bg-[#C6613D] w-full text-white uppercase font-bold text-[16px] rounded-[4px] hover:bg-[#a24f31]"
            >
              Đăng nhập
            </Button>
          </form>
          <div className="py-2">
            <span className="font-medium flex justify-center items-center gap-2 py-2 text-[12px]">
              Bạn chưa có tài khoản?{" "}
              <Link
                href="/signup"
                className="text-[#C6613D] hover:underline hover:font-bold"
              >
                Đăng ký ngay
              </Link>
            </span>
          </div>
        </section>
        <Image
          src={ProductBackground}
          alt="Product Background"
          className="object-cover w-[560px] h-[360px] rounded-[4px]"
        />
      </section>
    </section>
  );
};

export default LoginBody;
