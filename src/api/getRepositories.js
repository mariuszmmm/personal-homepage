import axios from "axios";
import { githubAPI } from "./api";
import { personData } from "../features/personalHomepage/PersonalHomepage/personData";

const reposTopicURL = (username, topic) =>
  `${githubAPI}/search/repositories?q=user:${username}+topic:${topic}+fork:true`;
const reposURL = (username) => `${githubAPI}/users/${username}/repos`;

export const getRepositories = async ({ username, topic }) => {
  const response = await axios.get(reposTopicURL(username, topic));
  let responseList = [];
  if (response.data.items.length > 0) {
    responseList = [...response.data.items];
  } else {
    const nextResponse = await axios.get(reposURL(username));
    responseList = [...nextResponse.data];
  }

  const favoriteList = personData.githubData.favoriteList;
  let firstList = [];
  let secondList = [];

  favoriteList.forEach((item) => {
    const repo = responseList.find((repo) => repo.name === item);
    if (repo) firstList = [...firstList, repo];
  });

  responseList.forEach((repo) => {
    const isFavorite = favoriteList.find((item) => repo.name === item);
    if (!isFavorite) secondList = [...secondList, repo];
  });

  return [...firstList, ...secondList];
};
