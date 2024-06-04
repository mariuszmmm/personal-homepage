import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 670px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    max-width: 100%;
    margin-top: -24px;
  }
`;

export const Caption = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin: 0 0 12px;
  }
`;

export const Mail = styled.a`
  font-size: 32px;
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  color: ${({ theme }) => theme.colors.textSecendary};
  letter-spacing: 0.05em;
  margin: 0 0 24px;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
    margin: 0 0 12px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secendary};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecendary};
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 0 0 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 14px;
    line-height: 1.2;
    margin: 0 0 40px;
  }
`;
