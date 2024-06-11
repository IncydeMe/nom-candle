const axios = require("axios");

export type orderInformation = {
  customerFullname: string;
  email: string;
  phone: string;
  address: string;
  province: string;
  district: string;
  paymentMethod: string;
  totalPrice: number;
};

export type orderDetails = {
  productId: string;
  quantity: number;
};

const BASE_URL = "https://nom-be-api.azurewebsites.net/apiv1";
const productPath = "orders";

export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${productPath}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return [];
  }
};

export const getOrderById = async (orderId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${productPath}/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching account:", error);
  }
};

export const createOrder = async (
  orderInfo: orderInformation,
  orderDetails: orderDetails[]
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${productPath}/create`,
      orderInfo,
      orderDetails
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching account:", error);
  }
};
