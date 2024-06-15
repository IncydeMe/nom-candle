"use client";

import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { ORDER_DATA } from "@/constants/order.data";

const PaymentMethod = ({
  setPaymentMethod,
}: {
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="mt-4">
      <div className="font-medium mt-4">Phương thức thanh toán</div>
      <div className="flex gap-2 mt-4">
        {ORDER_DATA.map((item) => {
          return (
            <Toggle
              key={item.id}
              onClick={() => setPaymentMethod(item.method)}
              className="data-[state=on]:bg-orange-50"
              variant="outline"
              aria-label="Toggle bold"
            >
              {item.name}
            </Toggle>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethod;
