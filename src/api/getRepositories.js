import axios from "axios";
import { githubAPI } from "./api";

const reposTopicURL = (username, topic) =>
  `${githubAPI}/search/repositories?q=user:${username}+topic:${topic}+fork:true`;
const reposURL = (username) => `${githubAPI}/users/${username}/repos`;

export const getRepositories = async ({ username, topic }) => {
  const response = await axios.get(reposTopicURL(username, topic));
  if (response.data.items.length > 0) {
    return response.data.items;
  } else {
    const nextResponse = await axios.get(reposURL(username));
    return nextResponse.data;
  }
};
