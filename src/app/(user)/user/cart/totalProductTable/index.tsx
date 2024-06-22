"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquareMinus, SquarePlus } from "lucide-react"; // Add import
import { useCart } from "@/app/user/cart/cartContext";

interface Product {
  productId: string;
  productName: string;
  productImgUrl: string;
  price: number;
  quantity: number;
  totalPrice: number;
}
interface TotalProductTableProps {
  data: Product[];
}

const TotalProductTable: React.FC<TotalProductTableProps> = ({ data }) => {
  const { updateCartQuantity } = useCart();

  const increaseQuantity = (productId: string) => {
    const product = data.find((item) => item.productId === productId);
    if (product) {
      updateCartQuantity(productId, product.quantity + 1);
    }
  };

  const decreaseQuantity = (productId: string) => {
    const product = data.find((item) => item.productId === productId);
    if (product && product.quantity > 1) {
      updateCartQuantity(productId, product.quantity - 1);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sản phẩm</TableHead>
          <TableHead className="text-center">Đơn giá</TableHead>
          <TableHead className="text-center">Số lượng</TableHead>
          <TableHead className="text-right">Thành tiền</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.productId}>
            <TableCell className="font-medium">{item.productName}</TableCell>
            <TableCell className="font-medium text-center">
              {item.price}
            </TableCell>
            <TableCell className="flex gap-3 justify-center font-medium text-center">
              <SquareMinus
                onClick={() => decreaseQuantity(item.productId)}
                size={20}
                className="cursor-pointer"
              />
              {item.quantity}
              <SquarePlus
                onClick={() => increaseQuantity(item.productId)}
                size={20}
                className="cursor-pointer"
              />
            </TableCell>
            <TableCell className="text-right font-medium">
              {(item.price * item.quantity).toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TotalProductTable;
