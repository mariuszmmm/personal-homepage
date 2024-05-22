import styled from "styled-components";
import { ReactComponent as Github } from "./github.svg";

export const GithubIcon = styled(Github)`
  width: ${({ $portfolio }) => ($portfolio ? "40px" : "48px")};
  height: auto;
  color: ${({ $portfolio, theme }) =>
    $portfolio ? theme.icon.primaryColor : theme.icon.secendaryColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 32px;
  }
`;
