import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    display: grid;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  color: hsl(180, 100%, 25%);
  transition: color 0.5s;
  margin: 0 0 0 20px;

  &:hover {
    color: hsl(180, 100%, 30%);
  }

  &:active {
    color: hsl(180, 100%, 35%);
  }
  &:disabled {
    color: #aaa;
  }
`;