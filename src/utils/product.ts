const axios = require("axios");

export type Product = {
  productId: string;
  productName: string;
};

export type ProductCategory = {
  categoryName: string;
  description: string;
  price: number;
  productId: string;
  productImgUrl: string;
  productName: string;
  size: string;
};

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
