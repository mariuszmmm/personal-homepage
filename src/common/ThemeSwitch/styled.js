import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sunIcon.svg";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 12px;
  min-width: max-content;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  z-index: 1;

  &:focus,
  &:hover {
    outline: 1px solid currentColor;
    outline-offset: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    transform: translateY(-13px);
  }
`;

export const ThemeInfo = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.switchColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 12px;
  inline-size: 0.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: none;
  }
`;

export const Switch = styled.div`
  display: flex;
  align-items: center;
  width: 48px;
  height: 26px;
  padding: 3px;
  background-color: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid;
  border-radius: 13px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: currentColor;
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(20px) rotate(180deg);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.text};
`;
