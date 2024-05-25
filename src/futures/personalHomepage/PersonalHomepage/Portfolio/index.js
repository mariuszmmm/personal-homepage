import { GithubIcon } from "../../../../common/Icon";
import { Section } from "../../../../common/Section";
import { Tile } from "../../../../common/Tile";
import { Header, PortfolioContent, PortfolioHeader, Text } from "./styled";
import { useApi } from "./useApi";

export const Portfolio = () => {
  const repos = useApi();

  return (
    <Section $portfolio>
      <PortfolioHeader>
        <GithubIcon $portfolio />
        <Header>Portfolio</Header>
        <Text>My recent projects</Text>
      </PortfolioHeader>
      <PortfolioContent>
        {repos?.map((repo, index) => (
          <Tile key={repo.id} repo={repo} index={index} />
        ))}
      </PortfolioContent>
    </Section>
  );
};
