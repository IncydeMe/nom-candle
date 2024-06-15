const axios = require("axios");

interface AccountData {
  firstName: string;
  lastName: string;
  roleId: number;
  email: string;
  phone: string;
  address: string;
}

const BASE_URL = "https://nom-be-api.azurewebsites.net/apiv1";
const categoriesPath = "accounts";

export const getAllAccount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${categoriesPath}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const updateAccount = async (
  accountId: string,
  accountData: AccountData
) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/${categoriesPath}/${accountId}/update`,
      accountData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating account:", error);
    return [];
  }
};

export const getAccountById = async (accountId: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${categoriesPath}/${accountId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching account:", error);
  }
};
