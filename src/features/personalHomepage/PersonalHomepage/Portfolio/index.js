import { useDispatch, useSelector } from "react-redux";
import { GithubIcon } from "./styled";
import { Section } from "../Section";
import { Text } from "../Text";
import { Header, PortfolioHeader } from "./styled";
import {
  fetchRepositories,
  selectRepositories,
  selectState,
} from "../../personalHomepageSlice";
import { useEffect } from "react";
import { Content } from "./Content";

export const Portfolio = ({ username, excludedRepositories }) => {
  const state = useSelector(selectState);
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories({ username, excludedRepositories }));

    // eslint-disable-next-line
  }, []);

  return (
    <Section $portfolio>
      <PortfolioHeader>
        <GithubIcon />
        <Header>Portfolio</Header>
        <Text>My recent projects</Text>
      </PortfolioHeader>
      <Content state={state} repositories={repositories} />
    </Section>
  );
};
