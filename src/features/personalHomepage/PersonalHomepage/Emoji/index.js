import styled, { css } from "styled-components";

export const Emoji = styled.img`
  width: 20px;
  margin: 0 0 -2px;

  ${({ $footer }) =>
    $footer &&
    css`
      width: 24px;
      margin: 0 0 -5px;
    `}

  ${({ $skill }) =>
    $skill &&
    css`
      width: 24px;
      margin: 0 0 0 16px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 17px;

    ${({ $footer }) =>
      $footer &&
      css`
        width: 16px;
        margin: 0 0 -3px;
      `}

    ${({ $skill }) =>
      $skill &&
      css`
        width: 16px;
        margin: 0 0 0 8px;
      `}
  }
`;
