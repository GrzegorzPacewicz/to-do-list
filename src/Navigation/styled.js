import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
const activeClassName = "active";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.teal};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  padding: 10px 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: white;
  text-decoration: none;

  &.${activeClassName} {
    font-weight: bold;
  }

  &:hover {
    border-bottom: 1px solid;
  }
`;
