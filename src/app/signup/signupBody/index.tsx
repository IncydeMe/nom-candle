"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { signup } from "@/utils/signup";
import ProductBackground from "../../../../public/images/ProductBackground.png";
import { useToast } from "@/components/ui/use-toast";

const SignupBody = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      toast({
        description: "Mật khẩu không trùng khớp",
        duration: 3000,
      });
      return;
    }

    try {
      const signupData = {
        email: formData.email,
        password: formData.password,
      };
      console.log(signupData);
      const response = await signup(signupData);
      toast({
        description: "Đăng ký thành công",
        duration: 3000,
      });
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  return (
    <section className="text-[#C6613D]">
      <h1 className="text-[36px] font-bold uppercase py-2">Đăng ký</h1>
      <h4 className="text-[24px] font-bold">
        Chào mừng bạn, vui lòng đăng ký để tiếp tục
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
            <div className="py-2">
              <Label htmlFor="confirm-password" className="pb-2">
                Xác nhận mật khẩu
              </Label>
              <Input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Vui lòng xác nhận mật khẩu của bạn"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="rounded-[4px]"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#C6613D] w-full text-white uppercase font-bold text-[16px] rounded-[4px] hover:bg-[#a24f31]"
            >
              Đăng ký
            </Button>
          </form>

          <div className="py-2">
            <span className="font-medium flex justify-center items-center gap-2 py-2 text-[12px]">
              Bạn đã có tài khoản?{" "}
              <Link
                href="/login"
                className="text-[#C6613D] hover:underline hover:font-bold"
              >
                Đăng nhập ngay
              </Link>
            </span>
          </div>
        </section>
        <Image
          src={ProductBackground}
          alt="Product Background"
          className="object-cover w-[560px] h-full rounded-[4px]"
        />
      </section>
    </section>
  );
};

export default SignupBody;
