const axios = require("axios");

export type Product = {
  productId: string;
  productName: string;
  categoryName: string;
  productImgUrl: string;
};

export interface ProductCategory extends Product {
  description?: string;
  price?: number;
  size?: string;
}

const BASE_URL = "https://nom-be-api.azurewebsites.net/apiv1";
const productPath = "products";

export const getAllProduct = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${productPath}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return [];
  }
};
export const getProductByCategory = async (categoryId: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${productPath}/category/${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product category:", error);
    return [];
  }
};
export const getProductById = async (productId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${productPath}/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product category:", error);
    return [];
  }
};

export const getRandomProducts = (
  products: Product[],
  count: number
): ProductCategory[] => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((product) => ({
    categoryName: product.categoryName,
    productId: product.productId,
    productImgUrl: product.productImgUrl,
    productName: product.productName,
  }));
};
