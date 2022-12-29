import styled from "styled-components";
import { Button } from "../../../../common/Button/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
  }
`;

export const StyledButton = styled(Button)`
  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    cursor: not-allowed;
  }
`;
