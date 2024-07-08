"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { getAccountById, updateAccount } from "@/utils/account";

const EditProfileBody = () => {
  const [accountId, setAccountId] = useState<any>(null);
  //For localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("user-id");
      setAccountId(value);
    }
  }, []);

  const { toast } = useToast();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    getAccountById(accountId || "").then((account) => {
      if (account) {
        setFirstName(account.firstName || "");
        setLastName(account.lastName || "");
        setEmail(account.email || "");
        setPhone(account.phone || "");
        setAddress(account.address || "");
      }
    });
  }, [accountId]);

  const handleUpdateAccount = async () => {
    const accountData = {
      firstName,
      lastName,
      password,
      roleId: 1,
      email,
      phone,
      address,
    };

    try {
      await updateAccount(accountId || "", accountData);
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
        <Label>Mật khẩu mới</Label>
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
