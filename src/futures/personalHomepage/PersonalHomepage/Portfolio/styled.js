import styled from "styled-components";

export const PortfolioHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  font-size: 30px;
  line-height: 1.2;
  color: ${({ theme }) => theme.title?.color};
  letter-spacing: 0.05em;
  margin-top: 12px;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  margin: 0 0 24px;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 1.4;
  color: ${({ theme }) => theme.title?.color};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 17px;
  }
`;

export const PortfolioContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
