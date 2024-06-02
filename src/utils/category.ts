const axios = require("axios");

export type Category = {
  categoryId: string;
  categoryName: string;
};

const BASE_URL = "https://nom-be-api.azurewebsites.net/apiv1";
const categoriesPath = "categories";

export const getAllCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${categoriesPath}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
