import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../../common/Error";
import { GithubIcon } from "../../../../common/Icon";
import { Loading } from "../../../../common/Loading";
import { Section } from "../../../../common/Section";
import { Text } from "../../../../common/Text";
import { Tile } from "../../../../common/Tile";
import { Header, PortfolioContent, PortfolioHeader } from "./styled";
import {
  fetchRepositories,
  selectRepositories,
  selectState,
} from "../personalHomepageSlice";
import { useEffect } from "react";

export const Portfolio = () => {
  const state = useSelector(selectState);
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, []);

  return (
    <Section $portfolio>
      <PortfolioHeader>
        <GithubIcon $portfolio />
        <Header>Portfolio</Header>
        <Text>My recent projects</Text>
      </PortfolioHeader>
      {state === "loading" && <Loading />}
      {state === "error" && <Error />}
      {state === "success" && (
        <PortfolioContent>
          {repositories.map((repo, index) => (
            <Tile key={repo.id} repo={repo} index={index} />
          ))}
        </PortfolioContent>
      )}
    </Section>
  );
};
