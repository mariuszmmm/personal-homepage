import styled from "styled-components";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as Facebook } from "../icons/facebook.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedIn.svg";
import { ReactComponent as Instagram } from "../icons/instagram.svg";

export const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    gap: 16px;
  }
`;

export const Item = styled.li`
  list-style: none;
  width: 48px;
  height: 48px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 32px;
    height: 32px;
  }
`;

export const Link = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const styledIcon = (IconComponent) => styled(IconComponent)`
  width: 48px;
  height: auto;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 32px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secendary};
  }
`;

export const GithubIcon = styledIcon(Github);
export const FacebookIcon = styledIcon(Facebook);
export const LinkedInIcon = styledIcon(LinkedIn);
export const InstagramIcon = styledIcon(Instagram);
