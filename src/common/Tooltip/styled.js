import styled from "styled-components";

export const TooltipWrapper = styled.p`
  margin: 0;
  position: absolute;
  top: 25px;
  left: 67px;
  z-index: 999;
  width: max-content;
  height: auto;
  border: 2px solid currentColor;
  border-radius: 5px;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.page.primaryBackgroundColor};
  display: ${({ $active }) => ($active ? "block" : "none")};
`;
