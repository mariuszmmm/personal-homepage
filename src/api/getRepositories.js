import axios from "axios";
import { url } from "./api";

export const getRepositories = async (username) => {
  try {
    const response = await axios.get(url(username));
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.error("Error fetching repos:", error);
    return {
      status: error.response.status,
    };
  }
};
