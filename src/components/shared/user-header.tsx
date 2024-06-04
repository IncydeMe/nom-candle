"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { CircleUserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import Logo from "../../../public/images/sample_logo.png";
import { Button } from "../ui/button";

const UserHeader = () => {
  const accessToken = localStorage.getItem("access-token");
  return (
    <>
      <header className="flex w-screen h-fit justify-between px-10 items-center relative before:absolute before:left-[90px] before:bottom-0 before:h-[1px] before:w-[90%] before:border-[0.05rem] before:border-[#C6613D]">
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
              <li>
                <Link
                  href="../user/cart"
                  className="transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
                >
                  <ShoppingCart size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="../user/profile"
                  className="transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline"
                >
                  <CircleUserRound size={24} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
        {!accessToken && (
          <Link href={"/login"}>
            <Button
              size={"sm"}
              className="text-white border border-[#c6613d] bg-[#c6613d] rounded-md hover:bg-[#c6613d]  "
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
