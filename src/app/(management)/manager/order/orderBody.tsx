"use client";
import React, { useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllOrders } from "@/utils/order";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface OrderData {
  orderId: string;
  orderStatus: string;
  customerFullName: string;
  address: string;
  phone: string;
  totalPrice: number;
}
const OrderBody = () => {
  const [data, setData] = React.useState([]);
  const route = useRouter();
  useEffect(() => {
    const getAllOrder = async () => {
      try {
        const result = await getAllOrders();
        setData(result);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    getAllOrder();
  }, []);
  const handleViewDetail = (orderId: string) => {
    localStorage.setItem("order-id", orderId);
    route.push(`/staff/order/order-details`);
  };
  return (
    <>
      <div className="text-[40px] text-[#111827] font-bold">Đơn hàng</div>
      <div className="mt-3 px-5 py-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] bg-orange-50">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#6B7280]">ID đơn hàng</TableHead>
              <TableHead className="text-[#6B7280]">Trạng thái</TableHead>
              <TableHead className="text-[#6B7280]">Khách hàng</TableHead>
              <TableHead className="text-[#6B7280] text-center">
                Địa chỉ
              </TableHead>
              <TableHead className="text-[#6B7280]">Điện thoại</TableHead>
              <TableHead className="text-[#6B7280]">Số tiền</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item: OrderData) => {
              const orderStatus =
                item.orderStatus === "Pending" ? (
                  <Badge className="bg-[#DBEAFE] border-[#93C5FD] text-[#1E40AF]">
                    Đơn mới
                  </Badge>
                ) : (
                  <Badge className="bg-[#D1FAE5] border-[#6EE7B7] text-[#065F46]">
                    Đang vận chuyển
                  </Badge>
                );
              return (
                <TableRow key={item.orderId}>
                  <TableCell className="text-[#6B7280]">
                    {item.orderId}
                  </TableCell>
                  <TableCell className="text-[#6B7280]">
                    {orderStatus}
                  </TableCell>
                  <TableCell className="text-[#6B7280]">
                    {item.customerFullName}
                  </TableCell>
                  <TableCell className="text-center text-[#6B7280]">
                    {item.address}
                  </TableCell>
                  <TableCell className="text-[#6B7280]">{item.phone}</TableCell>
                  <TableCell className="text-[#6B7280]">
                    {item.totalPrice.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-[#6B7280]">
                    <Button
                      onClick={() => handleViewDetail(item.orderId)}
                      className="border-[#6B7280] border-2 rounded-[4px]"
                    >
                      Xem chi tiết
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default OrderBody;
