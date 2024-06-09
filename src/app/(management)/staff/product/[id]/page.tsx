"use client";

import React from "react";
import { useSingleProduct } from "@/hooks/useProduct";

function ProductDetails({params}: {params: {id: string}}) {
    const { product, loading, error } = useSingleProduct(params.id);
    return ( 
        <div className="w-[1900px]">
            <h1>Product Details:</h1>

            <span className="flex items-center gap-4">
                <p className="font-semibold">Product ID: </p>
                {product?.productId}
            </span>
            <span className="flex items-center gap-4">
                <p className="font-semibold">Product Name:</p> 
                {product?.productName}
            </span>
            <span className="flex items-center gap-4">
                <p className="font-semibold">Price:</p> 
                {product?.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND' })} 
            </span>
            <span>
                <p className="font-semibold">Description:</p> 
                <p className="w-[640px]">{product?.description}</p>
            </span>
            <p>Size: {product?.size}</p>
            <span>
                <p className="font-semibold">Category Name:</p> 
                {product?.categoryName}
            </span>
            <p className="font-semibold">Product Image URL:</p>
            <img src={product?.productImgUrl} alt="Product Image" className="w-[360px]"/>

        </div>
     );
}

export default ProductDetails;