"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PaymentMethod from "./paymentMethod";
import { createOrder } from "@/utils/order";
import { getAccountById } from "@/utils/account";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/app/(user)/user/cart/cartContext";

interface UserInformation {
  accountId: string;
  firstName: string;
  lastName: string;
  roleId: number;
  email: string;
  phone: string;
  address: string;
}

const CheckoutMain = () => {
  const { toast } = useToast();
  const { cartItems, updateCartQuantity } = useCart(); // Add updateCartQuantity
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [userInformation, setUserInformation] =
    useState<UserInformation | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  //For localStorage
  const [accountId, setAccountId] = useState<any>(null);
  useEffect(() => {
    if (typeof window !== "undefined" || typeof localStorage !== undefined) {
      setAccountId(localStorage.getItem("user-id"));
    }
  }, []);

  const userAddress = userInformation?.address;
  const province = userAddress?.split(",")[3].trim();
  const district = userAddress?.split(",")[2].trim();

  useEffect(() => {
    getAccountById(accountId || "").then((account) => {
      setUserInformation(account);
    });
  }, []);

  useEffect(() => {
    updateTotalPrice();
  }, [cartItems]);

  const updateTotalPrice = () => {
    const newTotalPrice = cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  };

  const handleCreateOrder = async () => {
    if (paymentMethod === "") {
      toast({
        description: "Vui lòng chọn phương thức thanh toán",
        duration: 3000,
      });
    } else if (
      !userInformation?.address ||
      !userInformation?.phone ||
      !userInformation?.firstName ||
      !userInformation?.lastName
    ) {
      toast({
        description:
          "Vui lòng nhập thông tin địa chỉ, số điện thoại, tên người nhận",
        duration: 3000,
      });
    } else {
      try {
        const userInfomation = {
          customerFullName:
            userInformation?.lastName + " " + userInformation?.firstName,
          email: userInformation?.email,
          phone: userInformation?.phone,
          address: userInformation?.address,
          province: province,
          district: district,
          paymentMethod: paymentMethod,
          totalPrice: totalPrice,
        };
        const orderDetails = cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        }));
        await createOrder(userInfomation, orderDetails);
        toast({
          description: "Tạo đơn hàng thành công",
          duration: 3000,
        });
      } catch (error) {
        toast({
          description: "Tạo đơn hàng thất bại",
          duration: 3000,
        });
      }
    }
  };

  return (
    <>
      <div className="mt-3 px-5 py-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] bg-orange-50">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sản phẩm</TableHead>
              <TableHead className="text-center">Đơn giá</TableHead>
              <TableHead className="text-center">Số lượng</TableHead>
              <TableHead className="text-right">Thành tiền</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems?.map((item) => (
              <TableRow key={item.productId}>
                <TableCell className="font-medium">
                  {item.productName}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {item.price.toLocaleString()}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {item.quantity}
                </TableCell>
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
        <PaymentMethod setPaymentMethod={setPaymentMethod} />
      </section>

      <div onClick={handleCreateOrder} className="flex justify-end mt-4 mb-6">
        <Button className="bg-[#a25032] text-white hover:bg-[#a25032]">
          Đặt hàng
        </Button>
      </div>
    </>
  );
};

export default CheckoutMain;
