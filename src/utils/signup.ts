const axios = require("axios");

export type SignupInformation = {
  password: string;
  email: string;
};

const BASE_URL = "https://nom-be-api.azurewebsites.net/apiv1";
const productPath = "signup";

export const signup = async (data: SignupInformation) => {
  try {
    const response = await axios.post(`${BASE_URL}/${productPath}`, data);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};
