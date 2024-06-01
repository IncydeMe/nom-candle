import Image from "next/image";
import React, { useState } from "react";

import product_hero_images from "../../../public/images/productImages/product_hero_image.png";
import product_preview_1 from "../../../public/images/productImages/product_preview_1.png";
import product_preview_2 from "../../../public/images/productImages/product_preview_2.png";
import product_preview_3 from "../../../public/images/productImages/product_preview_3.png";
import product_preview_4 from "../../../public/images/productImages/product_preview_4.png";
import product_carousel_1 from "../../../public/images/productImages/product_carousel_1.png";
import product_carousel_2 from "../../../public/images/productImages/product_carousel_2.png";
import product_carousel_3 from "../../../public/images/productImages/product_carousel_3.png";
import UserBreadcrumb from "@/components/shared/breadcrumb";
import { PRODUCT_DATA } from "@/constants/product.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductPage = () => {
  const [value, setValue] = useState([0, 9000000]);

  return (
    <main className="text-[#C6613D]">
      <Image
        src={product_hero_images}
        alt="candleHeroImage"
        className="w-full"
      />
      <div className="mt-[25px]">
        <UserBreadcrumb />
      </div>
      <div className="flex gap-[60px] mt-[40px] justify-center">
        {PRODUCT_DATA.map(({ id, name }) => (
          <div
            className="cursor-pointer text-[20px] font-medium border-b-2 border-[#C6613D] leading-6"
            key={id}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-[18px]">
        <Image
          className="max-w-[200px] max-h-[400px]"
          src={product_preview_1}
          alt="product_preview_1"
        />
        <Image
          className="max-w-[200px] max-h-[400px]"
          src={product_preview_2}
          alt="product_preview_2"
        />
        <Image
          className="max-w-[200px] max-h-[400px]"
          src={product_preview_3}
          alt="product_preview_3"
        />
        <Image
          className="max-w-[200px] max-h-[400px]"
          src={product_preview_4}
          alt="product_preview_4"
        />
      </div>

      <div className="w-full h-[1px] bg-[#C6613D] mt-[60px] mb-5"></div>
      <div className="flex flex-col items-center">
        <div>Sản phẩm bán chạy</div>
        <div className="font-medium">Được yêu thích trong tháng</div>
      </div>
      <Carousel className="flex justify-center mb-10">
        <CarouselContent className="mt-[20px]">
          <CarouselItem className="max-w-[280px] max-h-[400px]">
            <Image src={product_carousel_1} alt="product_preview_1" />
          </CarouselItem>
          <CarouselItem className="max-w-[280px] max-h-[400px]">
            <Image src={product_carousel_2} alt="product_preview_1" />
          </CarouselItem>
          <CarouselItem className="max-w-[280px] max-h-[400px]">
            <Image src={product_carousel_3} alt="product_preview_1" />
          </CarouselItem>
          <CarouselItem className="max-w-[280px] max-h-[400px]">
            <Image src={product_carousel_3} alt="product_preview_1" />
          </CarouselItem>
          <CarouselItem className="max-w-[280px] max-h-[400px]">
            <Image src={product_carousel_3} alt="product_preview_1" />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </main>
  );
};

export default ProductPage;
