import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const FormNewTask = styled.input`
  padding: 10px;
  border: 1px solid lightgray;

  @media (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`;

export const FormButton = styled.button`
  border: none;
  background-color: teal;
  color: white;
  padding: 10px;
  transition: 1s;

  @media (max-width: 767px) {
    width: 100%;
    margin: auto; 
    transform: scale(1)
  }

  &:hover {
    background: hsl(180, 100%, 30%);
    transform: scale(1.05);
  }

   &:active {
    background: hsl(180, 100%, 35%);
  }
`;
