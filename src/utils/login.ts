const axios = require("axios");

export type LoginInformation = {
  password: string;
  email: string;
};

const BASE_URL = "https://nom-be-api.azurewebsites.net/apiv1";
const productPath = "login";

export const login = async (data: LoginInformation) => {
  try {
    const response = await axios.post(`${BASE_URL}/${productPath}`, data);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
