import styled from "styled-components";

export const Paragraph = styled.p`
  line-height: 150%;
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
