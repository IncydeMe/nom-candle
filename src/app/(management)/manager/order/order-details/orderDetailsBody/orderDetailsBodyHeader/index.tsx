import { Badge } from "@/components/ui/badge";
import React from "react";

const OrderDetailsBodyHeader = ({
  orderId,
  orderStatus,
}: {
  orderId: string | undefined;
  orderStatus: string | undefined;
}) => {
  return (
    <div className="mt-4 px-5 py-4 bg-orange-50 border-orange-150 border-[1px] rounded-[4px]">
      <div className="text-[24px] font-semibold mb-2">Đơn hàng #{orderId}</div>
      {orderStatus === "Pending" ? (
        <Badge className="bg-[#DBEAFE] border-[#93C5FD] text-[#1E40AF] text-[16px]">
          Đơn mới
        </Badge>
      ) : (
        <Badge className="bg-[#D1FAE5] border-[#6EE7B7] text-[#065F46] text-[16px]">
          Đang vận chuyển
        </Badge>
      )}
    </div>
  );
};

export default OrderDetailsBodyHeader;
