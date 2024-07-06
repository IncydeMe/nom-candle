"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { CircleUserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import Logo from "../../../public/images/sample_logo.png";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import { useCart } from "@/app/(user)/user/cart/cartContext";

const UserHeader = () => {
  const { cartItems } = useCart();

  //For localStorage
  let accessToken : any;
  if ( typeof window !== 'undefined' || window !== null) {
    accessToken = localStorage.getItem("access-token");
  }
  const router = useRouter();
  const handleLogout = () => {
    if( typeof window !== 'undefined' || window !== null) {
      localStorage.removeItem("access-token");
      localStorage.removeItem("user-id");
    }
    const deleteAllCookies = () => {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    };

    deleteAllCookies();
    router.push("/login");
  };
  return (
    <>
      <header className="bg-[#FFEDD7] flex w-screen h-fit justify-between px-10 items-center relative before:absolute before:left-[90px] before:bottom-0 before:h-[1px] before:w-[90%] before:border-[0.05rem] before:border-[#C6613D]">
        {/* Logo */}
        <section>
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              className="cursor-pointer h-[120px] w-[120px] object-contain"
            />
          </Link>
        </section>
        {/* General Navigation */}
        <nav>
          <ul className="flex justify-around gap-x-10 text-[#C6613D] ">
            <li>
              <Link
                href="../about"
                className="transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
              >
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link
                href="../products"
                className="transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
              >
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link
                href="../blog"
                className="transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="../contact"
                className="transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>
        {/* User Navigation */}
        {accessToken && (
          <nav>
            <ul className="flex justify-around gap-x-6 text-[#C6613D]">
              <li className="relative">
                <Link
                  href="/user/cart"
                  className="transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
                >
                  <ShoppingCart size={24} />
                  <Badge className=" absolute -right-[12px] -top-[10px] border-[2px] border-white flex justify-center w-[15px] bg-[#a25032] text-white hover:bg-[#a25032]">
                    {cartItems.length}
                  </Badge>
                </Link>
              </li>
              <li>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <CircleUserRound className="cursor-pointer" size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem>
                      <Link
                        href="../user/profile"
                        className="transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
                      >
                        Hồ sơ cá nhân
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="transition-all cursor-pointer ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
                    >
                      Đăng xuất
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </nav>
        )}

        {!accessToken && (
          <Link href={"/login"}>
            <Button
              size={"sm"}
              className="text-white border border-[#c6613d] bg-[#c6613d] rounded-md hover:bg-[#c6613d]"
            >
              Log in
            </Button>
          </Link>
        )}
      </header>
    </>
  );
};

export default UserHeader;
