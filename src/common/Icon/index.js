import styled from "styled-components";
import { ReactComponent as Github } from "./github.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as LinkedIn } from "./linkedIn.svg";
import { ReactComponent as Instagram } from "./instagram.svg";

export const GithubIcon = styled(Github)`
  width: ${({ $portfolio }) => ($portfolio ? "40px" : "48px")};
  height: auto;
  color: ${({ $portfolio, theme }) =>
    $portfolio ? theme.icon.primaryColor : theme.icon.secendaryColor};
    transition: color 0.3s ease-in-out;
    cursor: ${({ $portfolio }) => ($portfolio ? "auto" : "pointer")};;


  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 32px;
  }

  &:hover  {
    color: ${({ theme, $portfolio }) => !$portfolio && theme.icon.primaryColor};
  }
`;

export const FacebookIcon = styled(Facebook)`
  width: ${({ $portfolio }) => ($portfolio ? "40px" : "48px")};
  height: auto;
  color: ${({ $portfolio, theme }) =>
    $portfolio ? theme.icon.primaryColor : theme.icon.secendaryColor};
    transition: color 0.3s ease-in-out;
    cursor: ${({ $portfolio }) => ($portfolio ? "auto" : "pointer")};;


  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 32px;
  }

  &:hover  {
    color: ${({ theme, $portfolio }) => !$portfolio && theme.icon.primaryColor};
  }
`;

export const LinkedInIcon = styled(LinkedIn)`
  width: ${({ $portfolio }) => ($portfolio ? "40px" : "48px")};
  height: auto;
  color: ${({ $portfolio, theme }) =>
    $portfolio ? theme.icon.primaryColor : theme.icon.secendaryColor};
    transition: color 0.3s ease-in-out;
    cursor: ${({ $portfolio }) => ($portfolio ? "auto" : "pointer")};;


  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 32px;
  }

  &:hover  {
    color: ${({ theme, $portfolio }) => !$portfolio && theme.icon.primaryColor};
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: ${({ $portfolio }) => ($portfolio ? "40px" : "48px")};
  height: auto;
  color: ${({ $portfolio, theme }) =>
    $portfolio ? theme.icon.primaryColor : theme.icon.secendaryColor};
    transition: color 0.2s ease-in-out;
    cursor: ${({ $portfolio }) => ($portfolio ? "auto" : "pointer")};;


  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width:    32px;
  }

  &:hover  {
    color: ${({ theme, $portfolio }) => !$portfolio && theme.icon.primaryColor};
  }
`;
