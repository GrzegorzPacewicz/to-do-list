import styled from "styled-components";

export const SectionStyled = styled.section`
  margin: 5px 0;
  background: ${({ theme }) => theme.color.white};
  transition: 2s;
`;

export const Header = styled.header`
  padding: 10px;
  border-bottom: 3px solid ${({ theme }) => theme.color.alto};
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  padding: 10px 0;
  margin: 0;
`;

export const SectionBody = styled.div`
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
