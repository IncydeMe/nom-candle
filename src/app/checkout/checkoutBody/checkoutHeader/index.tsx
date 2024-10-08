"use client";
import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { getAccountById } from "@/utils/account";

interface Account {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}
const CheckoutHeader = () => {
  //For localStorage
  const [account, setAccount] = useState<Account | null>(null);
  const [accountId, setAccountId] = useState<any>(null);

  const userAddress =
    account?.address === undefined ? "Không có địa chỉ" : account?.address;
  const userName =
    account?.lastName === undefined || account?.firstName === undefined
      ? "Không có tên người nhận"
      : account?.lastName + " " + account?.firstName;
  const userPhone =
    account?.phone === undefined ? "Không có số điện thoại" : account?.phone;
  //For localStorage
  useEffect(() => {
    if (typeof window !== "undefined" || typeof localStorage !== undefined) {
      const value = localStorage.getItem("user-id");
      setAccountId(value);
    }
  }, []);

  useEffect(() => {
    getAccountById(accountId || "").then((account) => {
      if (account) {
        setAccount(account);
      }
    });
  }, []);
  return (
    <div className="px-5 py-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] bg-orange-50">
      <div className="flex items-center gap-2 text-[20px] text-[#a25032] font-semibold">
        <MapPin size={20} />
        Địa chỉ nhận hàng
      </div>
      <div className="flex justify-between mt-3">
        <div>
          {userName} {`(${userPhone})`}
        </div>
        <div>{userAddress}</div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
