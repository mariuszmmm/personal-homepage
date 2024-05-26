import axios from "axios";
import { url } from "./api";

export const getRepos = async () => {
  try {
    const response = await axios.get(url);
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
