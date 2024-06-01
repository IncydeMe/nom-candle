import Image from "next/image";
import React, { useState } from "react";

import ProductBackground from "../../../public/images/ProductBackground.png";
import UserBreadcrumb from "@/components/shared/breadcrumb";
import SearchInput from "@/components/search";
import { ProductCard } from "@/components/shared/custom-card";

import Category_NenThom from "../../../public/images/Category_NenThom.png";
import Category_SapThom from "../../../public/images/Category_SapThom.png";
import Category_RoomSprays from "../../../public/images/Category_RoomSprays.png";
import Category_KhuechTanTinhDau from "../../../public/images/Category_KhuechTanTinhDau.png";
import Link from "next/link";

const ProductPage = () => {
  const [value, setValue] = useState([0, 9000000]);

  return (
    <main className="flex flex-col justify-center gap-4 text-[#C6613D]">
      <UserBreadcrumb />
      <SearchInput />

      <Image
        src={ProductBackground}
        alt="Product Background"
        className="w-full h-[420px] object-cover rounded-[8px]"
      />

      <section className="text-center">
        <h4 className="uppercase font-extrabold text-[36px]">
          Chào mừng đến với cửa hàng Nơm
        </h4>
        <p className="font-semibold text-[16px] my-2">
          -- Mời mọi người ghé qua các danh mục của cửa hàng chúng mình! --
        </p>
      </section>
      <section>
        <div className="grid grid-cols-4 gap-4">
          <Link href={"/products/nen-thom"} className="flex flex-col gap-2">
            <Image
              src={Category_NenThom}
              alt="Category Nến Thơm"
              className="object-cover rounded-[8px]"
            />
            <h4 className="text-center font-semibold my-2">Nến Thơm</h4>
          </Link>
          <Link href={"/products/sap-thom"} className="flex flex-col gap-2">
            <Image
              src={Category_SapThom}
              alt="Category Sáp Thơm"
              className="object-cover rounded-[8px]"
            />
            <h4 className="text-center font-semibold my-2">Sáp Thơm</h4>
          </Link>
          <Link href={"/products/room-sprays"} className="flex flex-col gap-2">
            <Image
              src={Category_RoomSprays}
              alt="Category Room Sprays"
              className="object-cover rounded-[8px]"
            />
            <h4 className="text-center font-semibold my-2">Room Sprays</h4>
          </Link>
          <Link
            href={"/products/khuech-tan-tinh-dau"}
            className="flex flex-col gap-2"
          >
            <Image
              src={Category_KhuechTanTinhDau}
              alt="Category Khuếch Tán Tinh Dầu"
              className="object-cover rounded-[8px]"
            />
            <h4 className="text-center font-semibold my-2">
              Khuếch Tán Tinh Dầu
            </h4>
          </Link>
        </div>
      </section>
      <section className="text-center">
        <h4 className="uppercase font-extrabold text-[36px]">
          Không biết bắt đầu từ đâu à?
        </h4>
        <p className="font-semibold text-[16px] my-2">
          -- Ghé qua đây và thưởng thức các mùi hương bán chạy của chúng mình nè
          --
        </p>
      </section>
      <section className="grid grid-cols-4 justify-items-center">
        <ProductCard image={Category_NenThom} title="Sample Product" />
        <ProductCard image={Category_NenThom} title="Sample Product" />
        <ProductCard image={Category_NenThom} title="Sample Product" />
        <ProductCard image={Category_NenThom} title="Sample Product" />
      </section>
    </main>
  );
};

export default ProductPage;
