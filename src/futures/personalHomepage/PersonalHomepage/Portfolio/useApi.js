import { useEffect, useState } from "react";
import { getRepos } from "../../../../api/getRepos";

export const useApi = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRepos();
      setRepos(data);
    };

    fetchData();
  }, []);

  return repos;
};
