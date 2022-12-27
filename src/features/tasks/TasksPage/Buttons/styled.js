import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
  }
`;