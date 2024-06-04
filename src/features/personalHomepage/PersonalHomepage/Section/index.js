import styled, { css } from "styled-components";

export const Section = styled.section`
  background-color: ${({ $portfolio, theme }) =>
    $portfolio ? "inherit" : theme.colors.backgroundSecendary};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 0 -2px 72px;
  transition: background 0.5s ease-in-out;
  display: flex;
  flex-direction: column;

  ${({ $portfolio }) =>
    $portfolio &&
    css`
      align-items: center;
      box-shadow: none;
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-bottom: 50px;
  }
`;
