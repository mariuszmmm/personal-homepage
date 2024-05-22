import { GithubIcon } from "../../../../common/Icon";
import { Section } from "../../../../common/Section";
import { Tile } from "../../../../common/Tile";
import { Header, PortfolioContent, PortfolioHeader, Text } from "./styled";

export const Portfolio = () => (
  <Section $portfolio>
    <PortfolioHeader>
      <GithubIcon $portfolio />
      <Header>Portfolio</Header>
      <Text>My recent projects</Text>
    </PortfolioHeader>
    <PortfolioContent>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </PortfolioContent>
  </Section>
);
