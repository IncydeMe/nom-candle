import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TABLE_HEADER } from "@/constants/table.data";

interface Product {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}
const TotalProductTable = ({ data }: { data: Product[] }) => {
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

  const uniqueProducts = Array.from(productMap.values());

  return (
    <>
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
                  <TableCell className="text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                    {quantity}
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
    </>
  );
};

export default TotalProductTable;
