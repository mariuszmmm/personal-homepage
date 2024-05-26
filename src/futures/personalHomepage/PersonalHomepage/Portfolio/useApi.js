import { useEffect, useState } from "react";
import { getRepos } from "../../../../api/getRepos";

export const useApi = () => {
  const [state, setState] = useState({
    state: "loading",
    repos: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRepos();
      if (response.status === 200) {
        setState({
          state: "success",
          repos: response.data,
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
