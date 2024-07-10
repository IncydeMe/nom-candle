"use client";

import { OrderInformation, getOrderById } from "@/utils/order";
import React, { useEffect } from "react";
import OrderDetailsBodyHeader from "./orderDetailsBodyHeader";
import OrderDetailsBodyUserInformation from "./orderDetailsBodyUserInfomation";
import OrderDetailsMain from "./orderDetailsMain";

interface OrderProps {
  order: OrderInformation;
  orderDetails: [];
}
const OrderDetailsBody = () => {
  const [orderDetail, setOrderDetail] = React.useState<OrderProps>();
  const [orderId, setOrderId] = React.useState<any>(null);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const orderId = localStorage.getItem("order-id");
    }
    setOrderId(orderId);
  }, []);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const result = await getOrderById(orderId || "");
        setOrderDetail(result);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    getOrder();
  }, [orderId]);
  return (
    <div>
      <div className="text-[40px] text-[#111827] font-bold">
        Chi tiết đơn hàng
      </div>
      <OrderDetailsBodyHeader
        orderId={orderDetail?.order?.orderId}
        orderStatus={orderDetail?.order?.orderStatus}
      />
      <OrderDetailsBodyUserInformation data={orderDetail?.order} />
      <OrderDetailsMain data={orderDetail?.orderDetails} />
    </div>
  );
};

export default OrderDetailsBody;
