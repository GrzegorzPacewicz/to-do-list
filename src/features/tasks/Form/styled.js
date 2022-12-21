import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const FormNewTask = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const FormButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  transition: 1s;
  cursor: pointer;
 
  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
     }

  &:active {
    filter: brightness(120%);
  } 
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    margin: auto;
    transform: scale(1);
  }
`;
