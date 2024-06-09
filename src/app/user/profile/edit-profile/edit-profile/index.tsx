"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { updateAccount } from "@/utils/account";

const EditProfileBody = () => {
  const { toast } = useToast();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const initialFirstName = "";
  const initialLastName = "";
  const initialEmail = "";
  const initialPassword = "";
  const initialPhone = "";
  const initialAddress = "";

  const handleUpdateAccount = async () => {
    const accountId = "1"; // Replace with the actual accountId

    // Check if any field has changed
    if (
      firstName === initialFirstName &&
      lastName === initialLastName &&
      email === initialEmail &&
      password === initialPassword &&
      phone === initialPhone &&
      address === initialAddress
    ) {
      toast({
        description:
          "Từ thông tin cũ sang thông tin mới cũng không có quá nhiều sự thay đổi",
        duration: 3000,
      });
      return;
    }

    const accountData = {
      firstName,
      lastName,
      roleId: 1, // Adjust this based on your needs
      email,
      password,
      phone,
      address,
    };

    try {
      await updateAccount(accountId, accountData);
      toast({
        description: "Cập nhật thông tin thành công",
        duration: 3000,
      });
    } catch (error) {
      console.error("Error updating account:", error);
      toast({
        description: "Có gì đó sai sai!!",
        duration: 3000,
      });
    }
  };

  return (
    <div>
      <section>
        <div className="text-[18px]">Hồ sơ của tôi</div>
        <div className="text-[14px] mt-1">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </div>
      </section>
      <section>
        <div className="flex items-center gap-3">
          <Label>Tên đăng nhập: </Label>
          <div>Name</div>
        </div>

        <div className="flex gap-5">
          <div className="grow">
            <Label>Họ</Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="grow">
            <Label>Tên</Label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <Label>Password </Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
        <Label>Số điện thoại</Label>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Label>Địa chỉ</Label>
        <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        <Button
          onClick={handleUpdateAccount}
          className="mt-3 text-white border border-[#c6613d] bg-[#c6613d] rounded-md hover:bg-[#c6613d]"
        >
          Lưu
        </Button>
      </section>
    </div>
  );
};

export default EditProfileBody;
