import { Loading } from "./Loading";
import { Error as ErrorComponent } from "./Error";
import { Repositories } from "./Repositories";
export const Content = ({ state, repositories }) => {
  switch (state) {
    case "initial":
      return null;
    case "loading":
      return <Loading />;
    case "error":
      return <ErrorComponent />;
    case "success":
      return <Repositories repositories={repositories} />;
    default:
      throw new Error(`Unexpected state: ${state}`);
  }
};
