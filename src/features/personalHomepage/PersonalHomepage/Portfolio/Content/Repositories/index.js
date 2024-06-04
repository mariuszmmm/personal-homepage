import { Content } from "./styled";
import { Tile } from "../Tile";

export const Repositories = ({ repositories }) => (
  <Content>
    {repositories.map((repo, index) => (
      <Tile key={repo.id} repo={repo} index={index} />
    ))}
  </Content>
);
