import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ $portfolio, theme }) =>
    $portfolio ? "inherit" : theme.page.secendaryBackgroundColor};
  margin: 0 -2px 72px;
  transition: background 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: ${({ $portfolio }) => ($portfolio ? "center" : "stretch")};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-bottom: 50px;
  }
`;
