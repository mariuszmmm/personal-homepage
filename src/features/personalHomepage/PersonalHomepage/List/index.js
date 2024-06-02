import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 0;
  margin: 0 32px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 16px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: 1fr;
  }
`;
