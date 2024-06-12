"use client";

import React from "react";
import { Toggle } from "@/components/ui/toggle";

const PaymentMethod = () => {
  const onPressedChange = () => {};
  return (
    <div className="mt-4">
      <div className="font-medium mt-4">Phương thức thanh toán</div>
      <div className="flex gap-2 mt-4">
        <Toggle
          className="data-[state=on]:bg-orange-50"
          variant="outline"
          aria-label="Toggle bold"
        >
          Thanh toán khi nhận hàng
        </Toggle>
        <Toggle
          className="data-[state=on]:bg-orange-50"
          variant="outline"
          aria-label="Toggle bold"
        >
          Chuyển khoản ngân hàng
        </Toggle>
      </div>
    </div>
  );
};

export default PaymentMethod;
