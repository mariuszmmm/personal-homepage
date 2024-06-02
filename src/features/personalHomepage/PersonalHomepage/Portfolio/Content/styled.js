import styled from "styled-components";

export const PortfolioContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: 1fr;
  }
`;
