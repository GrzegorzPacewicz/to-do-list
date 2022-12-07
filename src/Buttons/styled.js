import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal}
  transition: color 0.5s;
  margin: 0 0 0 20px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
  &:disabled {
    color: ${({ theme }) => theme.color.silver}
  }
`;
