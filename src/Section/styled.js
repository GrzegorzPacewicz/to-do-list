import styled from "styled-components";

export const SectionStyled = styled.section`
  margin: 10px 0;
  background: white;
  transition: 2s;
`;

export const Header = styled.header`
  padding: 10px 20px;
  border-bottom: 3px solid #eee;
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
  padding: 10px;
  margin: 0;
`;

export const SectionBody = styled.div`
  padding: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
