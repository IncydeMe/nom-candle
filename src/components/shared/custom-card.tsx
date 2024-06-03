"use client";

import React from "react";

import Image, { StaticImageData } from "next/image";

import { Skeleton } from "@/components/ui/skeleton";

import Logo from "../../../public/images/sample_logo.png";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Heart } from "lucide-react";

interface BlogCardProps {
  title: string;
  image: StaticImageData;
}

export const SkeletonBlogCard: React.FC = () => {
  return (
    <div className="relative py-2">
      <div>
        <Skeleton className="w-[360px] h-[420px] object-cover rounded-[4px]" />
        <Skeleton className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
      </div>
      <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
        <Skeleton className="h-[12px] w-2/3 uppercase font-semibold text-[#C6613D]" />
        <Skeleton className="pt-4">
          <span className="flex items-center gap-x-2">
            <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">
              Đọc thêm
            </em>
            <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
          </span>
        </Skeleton>
      </span>
    </div>
  );
};

export const BlogCard: React.FC<BlogCardProps> = ({ title, image }) => {
  return (
    <div className="relative py-2">
      <div>
        <Image
          src={image}
          alt={title}
          className="w-[360px] h-[420px] object-cover rounded-[4px]"
        />
        <Image
          src={Logo}
          alt="Logo"
          className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5"
        />
      </div>
      <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
        <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
          {title}
        </p>
        <Link href={"../blog"} className="pt-4">
          <span className="flex items-center gap-x-2">
            <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">
              Đọc thêm
            </em>
            <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
          </span>
        </Link>
      </span>
    </div>
  );
};

interface ProductCardProps {
  type?: "best-seller" | "other-products";
  title: string;
  image: string;
  productCategory: string;
  productPrice?: number;
  productId: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  type,
  title,
  image,
  productCategory,
  productPrice,
  productId,
}) => {
  return (
    <section className="relative" id={productId}>
      <Link href={'/products/'+productCategory+'/'+productId}>
        <img
          src={image}
          alt={title}
          className={`${
            type?.match("best-seller")
              ? "w-[240px] h-[420px]"
              : "w-[240px] h-[240px]"
          } object-cover rounded-[12px]`}
        />
      </Link>
      {type?.match("best-seller") && (
        <div className="absolute top-0 left-0 bg-[#C6613D] text-white px-2 py-1 rounded-[0px]">
          <p className="text-[12px]">Bán chạy</p>
        </div>
      )}
      {type?.match("other-products") && (
        <div>
          <Heart className="absolute top-0 right-0 w-6 h-6 m-2 hover:bg-white hover:rounded-[40px] cursor-pointer" />
        </div>
      )}
      <p className="text-[12px] py-2 text-center">{title}</p>
    </section>
  );
};
