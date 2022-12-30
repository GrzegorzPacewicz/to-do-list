import { Wrapper } from "./styled";
import { Input } from "../../../../common/Input/styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParam, useReplaceQueryParam } from "../queryParam";

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

// import React from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import { Wrapper } from "./styled";
// import { Input } from "../../../../common/Input/styled";
// import searchQueryParamName from "../searchQueryParamName";

// const Search = () => {
//   const location = useLocation();
//   const history = useHistory();
//   const query = new URLSearchParams(location.search).get(searchQueryParamName);

  // const onInputChange = ({ target }) => {
  //   const searchParams = new URLSearchParams(location.search);

  //   if (target.value.trim() === "") {
  //     searchParams.delete(searchQueryParamName);
  //   } else {
  //     searchParams.set(searchQueryParamName, target.value);
  //   }

  //   history.push(`${location.pathname}?${searchParams.toString()}`);
  // };

//   return (
//     <Wrapper>
//       <Input
//         placeholder={searchQueryParamName}
//         value={query || ""}
//         onChange={onInputChange}
//       />
//     </Wrapper>
//   );
// };

// export default Search;
// value: target.value.trim() !== "" ? target.value : undefined,
