import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
activeClassName,

}))`
&.${activeClassName} {
    color: red;
}
`;
