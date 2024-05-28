import styled from "styled-components";
import { ReactComponent as Danger } from "../../images/danger.svg";
import { Text } from "../Text";

export const ErrorWrapper = styled.div`
  margin: 64px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DangerIcon = styled(Danger)`
  color: ${({ theme }) => theme.errorTitle.color};
  margin-bottom: 16px;
`;

export const Info = styled(Text)`
  margin: 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin: 16px 0;
    font-size: 14px;
  }
`;
