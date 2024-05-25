import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

export const LoadingWrapper = styled.div`
  margin: 64px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled(Spinner)`
  margin-top: 24px;
  color: ${({ theme }) => theme.spinner.primaryColor};
  animation: ${spin} 1.5s linear infinite;

  circle {
    color: ${({ theme }) => theme.spinner.secendaryColor};
  }
`;
