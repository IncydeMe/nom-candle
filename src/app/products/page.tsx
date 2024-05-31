import Image from "next/image";
import React from "react";

import product_hero_images from "../../../public/images/productImages/product_hero_image.png";
import product_preview_1 from "../../../public/images/productImages/product_preview_1.png";
import product_preview_2 from "../../../public/images/productImages/product_preview_2.png";
import product_preview_3 from "../../../public/images/productImages/product_preview_3.png";
import product_preview_4 from "../../../public/images/productImages/product_preview_4.png";
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
      <Carousel className="flex justify-center">
        <CarouselContent className="mt-[50px]">
          <CarouselItem className="max-w-[200px] max-h-[400px]">
            <Image src={product_preview_1} alt="product_preview_1" />
          </CarouselItem>
          <CarouselItem className="max-w-[200px] max-h-[400px]">
            <Image src={product_preview_2} alt="product_preview_1" />
          </CarouselItem>
          <CarouselItem className="max-w-[200px] max-h-[400px]">
            <Image src={product_preview_3} alt="product_preview_1" />
          </CarouselItem>
          <CarouselItem className="max-w-[200px] max-h-[400px]">
            <Image src={product_preview_4} alt="product_preview_1" />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div className="w-full h-[1px] bg-[#C6613D] mt-[60px] mb-8"></div>
    </main>
  );
};

export default ProductPage;
