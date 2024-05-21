import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.page.secendaryBackgroundColor};
  margin-bottom: 72px;
  margin: 0 -2px;
  transition: background 0.5s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-bottom: 50px;
  }
`;
