import styled from "styled-components";

export const TooltipWrapper = styled.p`
  margin: 0;
  position: absolute;
  top: 30px;
  max-width: 80vw;
  right: ${({ $isEven }) => ($isEven ? "auto" : 0)};
  word-wrap: break-word;
  z-index: 1;
  width: max-content;
  height: auto;
  border: 2px solid currentColor;
  border-radius: 5px;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.page.primaryBackgroundColor};
  display: ${({ $active }) => ($active ? "block" : "none")};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    top: 20px;
    right: auto;
  }
`;
