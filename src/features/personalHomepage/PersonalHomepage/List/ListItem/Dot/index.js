import styled from "styled-components";
import { ReactComponent as DotImage } from "./dot.svg";

export const Dot = styled(DotImage)`
  color: ${({ theme }) => theme.colors.secendary};
  width: 9px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 6px;
  }
`;
