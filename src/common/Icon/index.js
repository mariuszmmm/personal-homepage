import styled, { css } from "styled-components";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedIn.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";

const styleIcon = (IconComponent) => styled(IconComponent)`
  width: 48px;
  height: auto;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  ${({ $portfolio }) =>
    $portfolio &&
    css`
      width: 40px;
      height: auto;
      color: ${({ theme }) => theme.colors.secendary};
      cursor: auto;

      &:hover {
        color: ${({ theme }) => theme.colors.secendary};
      }
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 32px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secendary};
  }
`;

export const GithubIcon = styleIcon(Github);
export const FacebookIcon = styleIcon(Facebook);
export const LinkedInIcon = styleIcon(LinkedIn);
export const InstagramIcon = styleIcon(Instagram);
