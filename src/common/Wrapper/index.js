import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 119px auto 109px;
  padding: 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin: 34px auto 31px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 0 16px;
  }
`;
