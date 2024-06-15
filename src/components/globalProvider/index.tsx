import { CartProvider } from "@/app/user/cart/cartContext";
import React from "react";

const GlobalProvider = ({ children }: { children: any }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default GlobalProvider;
