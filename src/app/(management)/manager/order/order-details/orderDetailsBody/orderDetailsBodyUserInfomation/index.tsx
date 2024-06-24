import { OrderInformation } from "@/utils/order";
import React from "react";

const OrderDetailsBodyUserInformation = ({
  data,
}: {
  data: OrderInformation | undefined;
}) => {
  return (
    <div className="mt-4 px-5 py-4 bg-orange-50 border-orange-150 border-[1px] rounded-[4px]">
      <div className="text-[24px] font-bold mb-2">Thông tin khách hàng</div>
      <div className="flex items-baseline">
        <div className="font-semibold text-[18px] mr-1">Họ Tên: </div>
        <div className="text-[18px] font-medium text-[#6C757D]">
          {data?.customerFullName}
        </div>
      </div>
      <div className="flex items-baseline">
        <div className="font-semibold text-[18px] mr-1">Email: </div>{" "}
        <div className="text-[18px] font-medium text-[#6C757D]">
          {data?.email}
        </div>
      </div>
      <div className="flex items-baseline">
        <div className="font-semibold text-[18px] mr-1">Số điện thoại: </div>
        <div className="text-[18px] font-medium text-[#6C757D]">
          {data?.phone}
        </div>
      </div>
      <div className="flex items-baseline">
        <div className="font-semibold text-[18px] mr-1">
          Phương thức thanh toán:
        </div>
        <div className="text-[18px] font-medium text-[#6C757D]">
          {data?.paymentMethod}
        </div>
      </div>
      <div className="flex items-baseline">
        <div className="font-semibold text-[18px] mr-1">Địa chỉ: </div>
        <div className="text-[18px] font-medium text-[#6C757D]">
          {data?.address}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsBodyUserInformation;
