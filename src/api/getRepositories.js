import axios from "axios";
import { githubAPI } from "./api";

const reposURL = (username) => `${githubAPI}/users/${username}/repos`;

export const getRepositories = (username) =>
  axios.get(reposURL(username)).then((response) => response.data);
