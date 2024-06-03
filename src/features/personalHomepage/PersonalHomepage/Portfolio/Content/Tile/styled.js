import styled from "styled-components";
import { rgba } from "polished";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px;
  border: 6px solid;
  border-color: ${({ theme }) => theme.colors.tile.border};
  border-radius: 4px;
  background-color: ${({ $portfolio, theme }) =>
    $portfolio ? "inherit" : theme.colors.backgroundSecendary};
  transition: background 0.5s ease-in-out;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.hoveredBorder};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    padding: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    gap: 16px;
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 0;
  position: relative;

  span {
    width: 59px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 14px;
    line-height: 1.2;

    span {
      width: 46px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secendary};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => rgba(theme.colors.secendary, 0.2)};
  line-height: 1.4;
  cursor: pointer;
  position: absolute;
  left: 67px;
  max-width: calc(100% - 67px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: border-color 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => rgba(theme.colors.secendary, 0.8)};
  }

  &:active {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    left: 54px;
    max-width: calc(100% - 54px);
  }
`;
