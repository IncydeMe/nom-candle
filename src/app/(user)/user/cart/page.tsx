"use client";

import { ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import cart_hero from "../../../../public/images/cart/cart_hero.png";
import UserBreadcrumb from "@/components/shared/breadcrumb";

import TotalProductTable from "./totalProductTable";
import { Button } from "@/components/ui/button";
import { REFUND_POLICY } from "@/constants/policy.data";
import { useCart } from "./cartContext";
import { useEffect, useState } from "react";
import Link from "next/link";

function Cart() {
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
    <main className="text-[#C6613D]">
      <Image src={cart_hero} alt="cartHero" />
      <div className=" mt-4">
        <UserBreadcrumb />
      </div>
      <section className="flex justify-between items-center">
        <div className="w-full h-[1px] bg-[#C6613D] "></div>
        <div className="shrink-0 ml-1">Giỏ hàng của bạn</div>
      </section>

      <section className="flex justify-between mt-6">
        <div className="font-medium">
          Bạn đang có {cartItems.length || 0} sản phẩm
        </div>
        <Link href={"/products"}>
          <div className="cursor-pointer font-medium flex">
            Tiếp tục mua hàng <ChevronRight />
          </div>
        </Link>
      </section>

      <section>
        <TotalProductTable data={cartItems} setTotalPrice={setTotalPrice} />
      </section>

      <section className="flex items-center justify-between bg-[#EBCBA5] mt-7">
        <div className="grow ml-3">
          TỔNG TIỀN: {totalPrice.toLocaleString()}
        </div>
        <Link href={"/checkout"}>
          <Button className="border-l mr-3 border-white">Thanh toán</Button>
        </Link>
      </section>

      <section className="mt-8">
        <div className="font-semibold text-[30px]">Chính sách Đổi/Trả</div>
        <div className="ml-5 flex flex-col gap-2">
          {REFUND_POLICY.map((data) => {
            return (
              <div key={data} className="flex gap-2">
                <MoveRight className="min-w-[24px]" />
                <span className="shrink">{data}</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Cart;
