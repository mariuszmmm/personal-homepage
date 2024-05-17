import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sunIcon.svg";

export const ModeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  min-width: max-content;
  position: absolute;
  right: 17px;
  cursor: pointer;

  &:hover {
    outline: 1px solid currentColor;
    outline-offset: 6px;
  }
`;

export const ModeInfo = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.switchColor};
  font-weight: ${({ theme }) => theme.mode.bold};
  font-size: 12px;
  inline-size: 0.3;
`;

export const Switch = styled.div`
  display: flex;
  align-items: center;
  width: 48px;
  height: 26px;
  padding: 3px;
  background-color: ${({ theme }) => theme.mode.switch.backgroundColor};
  border: 1px solid;
  border-radius: 13px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: currentColor;
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px) rotate(180deg);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.mode.switch.color};
`;
