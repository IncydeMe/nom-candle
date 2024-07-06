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
  let accountId: any;
  if (typeof window !== "undefined") {
    accountId = localStorage.getItem("user-id");
  }

  const [account, setAccount] = useState<Account | null>(null);

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
          {account?.lastName + " " + account?.firstName} {`(${account?.phone})`}
        </div>
        <div>{account?.address}</div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
