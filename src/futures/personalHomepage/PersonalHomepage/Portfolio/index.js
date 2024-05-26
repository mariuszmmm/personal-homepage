import { Error } from "../../../../common/Error";
import { GithubIcon } from "../../../../common/Icon";
import { Loading } from "../../../../common/Loading";
import { Section } from "../../../../common/Section";
import { Text } from "../../../../common/Text";
import { Tile } from "../../../../common/Tile";
import { Header, PortfolioContent, PortfolioHeader } from "./styled";
import { useApi } from "./useApi";

export const Portfolio = () => {
  const { state, repos } = useApi();

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
          {repos.map((repo, index) => (
            <Tile key={repo.id} repo={repo} index={index} />
          ))}
        </PortfolioContent>
      )}
    </Section>
  );
};
