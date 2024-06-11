"use client";

// CartContext.tsx
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the shape of a product
interface Product {
  productId: string;
  productName: string;
  productImgUrl: string;
  price: number;
  quantity: number;
}

// Define the context type
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

interface Props {
  children: ReactNode;
}

// Create the context
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
});

// Cart provider component
export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const savedCartItems = localStorage.getItem("cartItems");
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
