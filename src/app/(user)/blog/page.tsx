"use client";
import React from "react";

import Image from "next/image";

import Blog_1 from "../../../../public/images/Blog_Image_1.png";
import Blog_2 from "../../../../public/images/Blog_Image_2.png";
import Blog_3 from "../../../../public/images/Blog_Image_3.png";
import Blog_4 from "../../../../public/images/Blog_Image_4.png";
import Blog_5 from "../../../../public/images/Blog_Image_5.png";
import Blog_6 from "../../../../public/images/Blog_Image_6.png";

import Blog_Cover from "../../../../public/images/Blog_CoverImage.png";

import Logo from "../../../public/images/sample_logo.png";

import UserBreadcrumb from "@/components/shared/breadcrumb";
import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { BlogCard } from "@/components/shared/custom-card";
import RootLayout from "../../layout";

function Blog() {
  return (
    <section>
      <Image
        priority
        src={Blog_Cover}
        alt="Blog Cover Image"
        className="w-[100%] h-[360px] object-cover rounded-[12px]"
      />

      <section className="flex justify-between items-end relative mt-12">
        <hr className="w-full border-t-[3px] border-[#C6613D]" />
        <div className="absolute left-0 py-2 text-[#C6613D]">
          <UserBreadcrumb />
        </div>
        <h4 className="text-[24px] font-semibold uppercase text-[#C6613D] absolute right-0">
          Nơm Blogs
        </h4>
      </section>
      <section className="grid grid-cols-3 my-4 justify-items-center">
        <BlogCard
          title="Nến thơm là gì, cách nhận biết nến thơm an toàn."
          image={Blog_1}
        />
        <BlogCard
          title="Bí quyết cho một giấc ngủ sâu và ngon."
          image={Blog_2}
        />
        <BlogCard
          title="Tác dụng của nến thơm, các lưu ý khi sử dụng."
          image={Blog_3}
        />
        <BlogCard
          title="Những thời điểm thích hợp để thắp nến thơm"
          image={Blog_4}
        />
        <BlogCard
          title="Những ảnh hưởng của mùi hương lên não bộ"
          image={Blog_5}
        />
        <BlogCard
          title="Những việc làm cho ngày cuối tuần ý nghĩa hơn"
          image={Blog_6}
        />
        {/* Pagination */}
      </section>
    </section>
  );
}

export default Blog;
