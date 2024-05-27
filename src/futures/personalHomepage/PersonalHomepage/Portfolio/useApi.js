import { useEffect, useState } from "react";
import { getRepos } from "../../../../api/getRepos";
import { person } from "../../../../utils/person";

export const useApi = () => {
  const [state, setState] = useState({
    state: "loading",
    repos: [],
  });

  useEffect(() => {
    const { name, exclusions } = person.github;
    const fetchData = async () => {
      const response = await getRepos(name);

      const repos = response.data.filter((repo) =>
        !exclusions.some((exclusion) => exclusion.name === repo.name)
      );

      if (response.status === 200) {
        setState({
          state: "success",
          repos,
        });
      } else {
        setState({
          ...state,
          state: "error",
        });
      }
    };

    setTimeout(() => fetchData(), 1000);

    // eslint-disable-next-line
  }, []);

  return {
    state: state.state,
    repos: state.repos,
  };
};
