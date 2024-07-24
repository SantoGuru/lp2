// utils/api.ts
import axios from "axios";

const api = axios.create({ baseURL: "/api" });

export const fetchPrice = async (symbol: string) => {
  try {
    const req = { prefix: symbol };
    const response = await axios.post("/api", req);
    return response.data.value;
  } catch (error) {
    console.error("Error fetching Bitcoin price", error);
    return null;
  }
};
