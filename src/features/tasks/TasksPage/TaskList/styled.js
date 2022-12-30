import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.ul`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  align-items: center;
  word-break: break-word;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 0;
  transition: 0.6s;
`;

export const ButtonToggleDone = styled(Button)`
  background: hsl(120, 100%, 30%);
  color: ${({ theme }) => theme.color.white};
  &:hover {
    background: hsl(120, 100%, 38%);
  }
`;

export const ButtonRemove = styled(Button)`
  background: hsl(0, 100%, 40%);
  color: ${({ theme }) => theme.color.white};
  &:hover {
    background: hsl(0, 100%, 55%);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.color.blueLagoon};
  }
`;
