import { Wrapper } from "./styled";
import { Input } from "../../../../common/Input/styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParam, useReplaceQueryParam } from "./queryParam";

const Search = () => {
  const query = useQueryParam(searchQueryParamName);
  const replaceQueryParam = useReplaceQueryParam();

  const onInputChange = ({ target }) => {
    replaceQueryParam({
      key: searchQueryParamName,
      value: target.value.trim(),
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder={searchQueryParamName}
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;