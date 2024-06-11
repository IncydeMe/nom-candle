import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TABLE_HEADER } from "@/constants/table.data";
import { SquareMinus, SquarePlus } from "lucide-react";

interface Product {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}
const TotalProductTable = ({
  data,
  setTotalPrice,
}: {
  data: Product[];
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const productMap = new Map<
    string,
    { productId: string; productName: string; price: number; quantity: number }
  >();

  data.forEach((product) => {
    if (productMap.has(product.productId)) {
      const existingProduct = productMap.get(product.productId)!;
      existingProduct.quantity += product.quantity;
    } else {
      productMap.set(product.productId, { ...product });
    }
  });

  const [uniqueProducts, setUniqueProducts] = useState(
    Array.from(productMap.values())
  );
  const decreaseQuantity = (productId: string) => {
    const updatedProducts = uniqueProducts
      .map((product) => {
        if (product.productId === productId && product.quantity > 0) {
          const newQuantity = product.quantity - 1;
          if (newQuantity === 0) {
            removeFromLocalStorage(productId);
            return null;
          } else {
            return {
              ...product,
              quantity: newQuantity,
            };
          }
        }
        return product;
      })
      .filter(Boolean) as Product[];

    setUniqueProducts(updatedProducts);
  };
  const removeFromLocalStorage = (productId: string) => {
    const storedProducts = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    const updatedStorage = storedProducts.filter(
      (product: Product) => product.productId !== productId
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedStorage));
  };

  const increaseQuantity = (productId: string) => {
    const updatedProducts = uniqueProducts.map((product) => {
      if (product.productId === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    setUniqueProducts(updatedProducts);
    localStorage.setItem("cartItems", JSON.stringify(updatedProducts));
  };

  useEffect(() => {
    const totalPrice = uniqueProducts.reduce((sum, { price, quantity }) => {
      return sum + price * quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }, [uniqueProducts, setTotalPrice]);

  return (
    <Table className="bg-[#EBCBA5] border border-[#EBCBA5] mt-10">
      <TableHeader>
        <TableRow>
          {TABLE_HEADER.map((headerGroup) => (
            <TableHead
              className="text-center border-b border-l  border-r first:border-l-0 last:border-r-0 border-white"
              key={headerGroup.id}
            >
              {headerGroup.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {uniqueProducts.map(
          ({ productId, productName, quantity, price }, index) => {
            const productPrice = price * quantity;
            return (
              <TableRow key={productId}>
                <TableCell className="text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                  {index}
                </TableCell>
                <TableCell className="text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                  {productName}
                </TableCell>
                <TableCell className="flex gap-2 items-center justify-center text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                  <SquareMinus
                    onClick={() => decreaseQuantity(productId)}
                    size={20}
                    className="cursor-pointer"
                  />
                  {quantity}
                  <SquarePlus
                    onClick={() => increaseQuantity(productId)}
                    size={20}
                    className="cursor-pointer"
                  />
                </TableCell>
                <TableCell className="text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                  {productPrice}
                </TableCell>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
};

export default TotalProductTable;
