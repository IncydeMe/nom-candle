"use client";
import { getProductById } from "@/utils/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface OrderDetailMainProps {
  orderDetailId: string;
  price: number;
  productId: string;
  productName: string;
  quantity: number;
}

const OrderDetailsMain = ({
  data,
}: {
  data: OrderDetailMainProps[] | undefined;
}) => {
  const [products, setProducts] = useState<any[]>([]);

  console.log(data);
  useEffect(() => {
    const fetchProducts = async () => {
      if (data) {
        try {
          const fetchedProducts = await Promise.all(
            data.map(async (item) => {
              const product = await getProductById(item.productId);
              return { ...item, productDetails: product };
            })
          );
          setProducts(fetchedProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };

    fetchProducts();
  }, [data]);

  return (
    <div className="flex gap-4 mt-4 px-5 py-4 bg-orange-50 border-orange-150 border-[1px] rounded-[4px]">
      <div className="flex flex-col grow gap-3">
        {products.map((product) => {
          const productDetails = product.productDetails;
          return (
            <div>
              <div key={product.productId} className="flex gap-3 bg-white p-3">
                <Image
                  className="rounded-[4px]"
                  alt="Product Image"
                  width={100}
                  height={100}
                  src={product.productDetails.productImgUrl}
                />
                <div className="flex flex-col gap-2 justify-between">
                  <div className="text-[18px] font-bold">
                    {productDetails.productName}
                  </div>
                  <div>Giá: {productDetails.price?.toLocaleString()}</div>
                  <div>Size: {productDetails.size}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 grow bg-white p-3">
        {products.map((product) => {
          return (
            <div className="flex justify-between p-3 bg-[#F9FBFC]">
              <div>
                <div className="font-bold">{product.productName}</div>
                <div>Giá: {product.productDetails.price?.toLocaleString()}</div>
                <div>Số lượng: {product.quantity}</div>
              </div>
              <div className="font-bold">
                = {product.price?.toLocaleString()}
              </div>
            </div>
          );
        })}
        <div className="font-bold flex justify-end">
          Tổng cộng: {data?.reduce((a, b) => a + b.price, 0).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsMain;
