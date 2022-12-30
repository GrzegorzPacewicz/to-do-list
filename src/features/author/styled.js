import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  margin: 20px auto;
  box-shadow: 5px 5px 10px #aab;
`;

export const Text = styled.div`
  line-height: 150%;
  margin: 0 20px;
  text-align: justify;
`;

export const Paragraph = styled.p`
  padding: 0;
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.color.teal};
  }
`;
