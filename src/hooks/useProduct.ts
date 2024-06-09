"use client";

import type { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

//CRUD operations

//Fetch all products
export function useProduct() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>("/products");
            console.log(response);
            setProducts(response.data);
        } catch (error : any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error };
};

//Fetch a single product
export const useSingleProduct = (id: string) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchProduct = async (id: string) => {
        try {
            const response = await axios.get<Product>(`/products/${id}`);
            setProduct(response.data);
        } catch (error : any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    return { product, loading, error };
};

//Create a new product
export const createProduct = async (product: Product) => {
    try {
        await axios.post("/products", product);
    } catch (error : any) {
        throw new Error(error.message);
    }
};

//Update an existing product
export const updateProduct = async (productId: string, productData: Product) => {
    try {
        await axios.put(`/products/${productId}`, productData);
    } catch (error : any) {
        throw new Error(error.message);
    }
};

//Delete an existing product
export const deleteProduct = async (id: string) => {
    try {
        await axios.delete(`/products/${id}`);
    } catch (error : any) {
        throw new Error(error.message);
    }
};


