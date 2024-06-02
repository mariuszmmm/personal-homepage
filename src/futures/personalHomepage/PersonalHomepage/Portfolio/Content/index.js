import { Loading } from "./Loading";
import { Error } from "./Error";
import { PortfolioContent } from "./styled";
import { Tile } from "./Tile";
export const Content = ({ state, repositories }) => {
  switch (state) {
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
    case "success":
      return (
        <PortfolioContent>
          {repositories.map((repo, index) => (
            <Tile key={repo.id} repo={repo} index={index} />
          ))}
        </PortfolioContent>
      );
    default:
      return null;
  }
};
