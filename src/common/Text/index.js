import styled from "styled-components";

export const Text = styled.p`
  margin: 0 0 24px;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textSecendary};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 17px;
  }
`;
