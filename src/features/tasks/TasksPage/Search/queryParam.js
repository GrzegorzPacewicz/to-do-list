import { useHistory, useLocation } from "react-router";

export const useQueryParam = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useReplaceQueryParam = () => {
  const history = useHistory();
  const location = useLocation();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
