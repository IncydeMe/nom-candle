"use client";

import React, { useEffect, useState, useContext } from "react";
import UserBreadcrumb from "@/components/shared/breadcrumb";

import Image from "next/image";
import Product_Image from "../../../../../../public/images/Product_Image.png";

import { ProductCard } from "@/components/shared/custom-card";
import {
  getAllProduct,
  getProductById,
  getRandomProducts,
} from "@/utils/product";
import { CartContext } from "@/app/(user)/user/cart/cartContext";

interface Product {
  productId: string;
  productName: string;
  productImgUrl: string;
  categoryName: string;
  description: string;
  price: number;
}

export type ProductCategory = {
  categoryName: string;
  productId: string;
  productImgUrl: string;
  productName: string;
};
export default function Page({
  params,
}: {
  params: { id: string; category: string };
}) {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState<Product>();
  const [allProduct, setAllProduct] = useState<Product>();
  const [randomProducts, setRandomProducts] = useState<ProductCategory[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(params.id);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const fetchedAllProducts = await getAllProduct();
        setAllProduct(fetchedAllProducts);
        setRandomProducts(getRandomProducts(fetchedAllProducts, 4));
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };

    fetchAllProducts();
  }, []);
  const productPrice = product?.price?.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        productId: product.productId,
        productName: product.productName,
        price: product.price,
        quantity: 1,
        productImgUrl: product.productImgUrl,
        totalPrice: product.price,
      });
    }
  };

  // const imageFromData = products?.productImgUrl.toString();
  return (
    <div className="flex flex-col">
      <section className="flex justify-between items-end relative mt-12 ">
        <hr className="w-full border-t-[3px] border-[#C6613D]" />
        <div className="absolute left-0 py-2 text-[#C6613D]">
          <UserBreadcrumb />
        </div>
        <h4 className="text-[24px] font-semibold uppercase text-[#C6613D] absolute right-0">
          {params.category.match("nen-thom")
            ? "Nến thơm"
            : params.category.match("sap-thom")
            ? "Sáp thơm"
            : params.category.match("room-sprays")
            ? "Room Sprays"
            : params.category.match("khuech-tan-tinh-dau")
            ? "Khuếch tán tinh dầu"
            : ""}
        </h4>
      </section>
      <section className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2">
          {product?.productImgUrl && (
            <Image
              src={
                product.productImgUrl ? product.productImgUrl : Product_Image
              }
              width={500}
              height={500}
              alt="Product Image"
              className="w-full h-[360px] object-cover rounded-[8px]"
            />
          )}
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px] font-semibold text-[#C6613D]">
              {product?.productName}{" "}
            </h4>
            <em className="text-[#C6613D]">
              {product?.description} <br />
            </em>
            <p className="text-[16px] font-semibold text-[#C6613D]">
              {productPrice}{" "}
            </p>
            <div className="flex justify-between">
              <button className="w-[200px] h-[40px] bg-[#C6613D] hover:bg-[#8d442a] text-white transition-colors ease-in-out duration-500 rounded-[8px]">
                Mua ngay
              </button>
              <button
                onClick={handleAddToCart}
                className="w-[200px] h-[40px] bg-none hover:bg-[#C6613D] border-[1px] border-[#C6613D] text-[#C6613D] hover:text-white transition-all ease-in-out duration-300 rounded-[8px]"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-4">
        <h3 className="text-center text-[#C6613D] font-semibold uppercase text-[36px]">
          Các sản phẩm khác
        </h3>
        <div className="grid grid-cols-4 gap-x-4 justify-items-center my-4">
          {randomProducts.map((product) => (
            <ProductCard
              key={product.productId}
              type="best-seller"
              title={product.productName}
              image={product.productImgUrl}
              productCategory={product.categoryName}
              productId={product.productId}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
