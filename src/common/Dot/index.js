import styled from "styled-components";
import { ReactComponent as DotSvg } from "./dot.svg";

export const Dot = styled(DotSvg)`
  color: ${({ theme }) => theme.dot.color};
  width: 9px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 6px;
  }
`;
