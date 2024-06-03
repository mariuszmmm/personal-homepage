import styled, { css } from "styled-components";

export const Tooltip = styled.p`
  margin: 0;
  position: absolute;
  bottom: 0;
  transform: translateY(calc(100% + 8px));
  max-width: 80vw;
  right: ${({ $moveToRight }) => ($moveToRight ? 0 : "auto")};
  word-wrap: break-word;
  z-index: 1;
  width: max-content;
  height: auto;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 2px 5px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: ${({ $active }) => ($active ? "block" : "none")};

  ${({ $top }) =>
    $top &&
    css`
      bottom: auto;
      top: 0;
      transform: translateY(calc(-100% - 5px));
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    right: auto;
  }
`;
