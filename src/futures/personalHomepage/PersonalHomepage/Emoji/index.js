import styled, { css } from "styled-components";

export const Emoji = styled.img`
  width: 20px;
  margin-bottom: -2px;

  ${({ $footer }) =>
    $footer &&
    css`
      width: 24px;
      margin-bottom: -5px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 17px;

    ${({ $footer }) =>
      $footer &&
      css`
        width: 16px;
        margin-bottom: -3px;
      `}
  }
`;
