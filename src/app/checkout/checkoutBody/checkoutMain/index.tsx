"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "@/app/user/cart/cartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PaymentMethod from "./paymentMethod";

const CheckoutMain = () => {
  const { cartItems } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    updateTotalPrice();
  }, [cartItems]);

  const updateTotalPrice = () => {
    const totalPrice = cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  };

  return (
    <>
      <div className="mt-3 px-5 py-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] bg-orange-50">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sản phẩm</TableHead>
              <TableHead>Đơn giá</TableHead>
              <TableHead>Số lượng</TableHead>
              <TableHead className="text-right">Thành tiền</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems?.map((item) => (
              <TableRow key={item.productId}>
                <TableCell className="font-medium">
                  {item.productName}
                </TableCell>
                <TableCell className="font-medium">{item.price}</TableCell>
                <TableCell className="font-medium">{item.quantity}</TableCell>
                <TableCell className="text-right font-medium">
                  {(item.price * item.quantity).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Tổng tiền</TableCell>
              <TableCell className="text-right">
                {totalPrice.toLocaleString()}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      <section>
        <div className="font-medium mt-4">Ghi chú đơn hàng:</div>
        <Input className="bg-orange-50 border border-orange-50" />
      </section>

      <section>
        <PaymentMethod />
      </section>

      <div className="flex justify-end my-4">
        <Button className="bg-[#a25032] text-white hover:bg-[#a25032]">
          Đặt hàng
        </Button>
      </div>
    </>
  );
};

export default CheckoutMain;
