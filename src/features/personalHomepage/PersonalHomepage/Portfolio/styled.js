import styled, { css } from "styled-components";
import { ReactComponent as Github } from "../icons/github.svg";

export const PortfolioHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  font-size: 30px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textSecendary};
  letter-spacing: 0.05em;
  margin-top: 12px;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const GithubIcon = styled(Github)`
  width: 40px;
  height: auto;
  color: ${({ theme }) => theme.colors.secendary};
`;