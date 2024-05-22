import styled from "styled-components";
import { rgba } from "polished";

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 50px;
  border: 6px solid ${({ theme }) => theme.tile.borderColor};
  border-radius: 4px;
  background-color: ${({ $portfolio, theme }) =>
    $portfolio ? "inherit" : theme.page.secendaryBackgroundColor};
  transition: background 0.5s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 18px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.tileTitle.color};
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 16px;
    margin: 0 0 16px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 0;

  span {
    display: inline-block;
    width: 68px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 14px;
    line-height: 1.2;

    span {
      width: 55px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin: 16px 0 0;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.link.color};
  border-bottom: 1px solid ${({ theme }) => rgba(theme.link.color, 0.2)};
  padding-bottom: 3px;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => rgba(theme.link.color, 0.8)};
  }

  &:active {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
