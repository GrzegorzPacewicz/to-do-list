import { useHistory, useLocation } from "react-router";

export const useQueryParam = (key) => {
  const location = useLocation();
  return (new URLSearchParams(location.search)).get(key)
};

export const useReplaceQueryParam = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  }
};