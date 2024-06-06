import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../../images/spinner.svg";

export const LoadingWrapper = styled.div`
  margin: 64px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled(Spinner)`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.spinner.primary};
  animation: ${spin} 1s linear infinite;

  circle {
    color: ${({ theme }) => theme.colors.spinner.secendary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 80px;
    margin: 0;
  }
`;
