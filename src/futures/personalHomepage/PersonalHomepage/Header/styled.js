import styled from "styled-components";
import { ReactComponent as Message } from "./message.svg";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 72px;
  width: 100%;
  margin-top: -26px;
  margin-bottom: 73px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 48px;
  }
`;

export const Image = styled.img`
  max-width: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    max-width: 40vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 633px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    max-width: 100%;
  }
`;

export const Caption = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin: 0 0 8px;
  }
`;

export const Name = styled.h1`
  font-size: 38px;
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  color: ${({ theme }) => theme.title?.color};
  letter-spacing: 0.05em;
  margin: 0 0 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 22px;
    margin: 0 0 16px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin-bottom: -2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 17px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1.4px;
  margin: 0 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 17px;
    margin: 0 0 24px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.button.backgroundColor};
  color: ${({ theme }) => theme.button.color};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  border: 1px solid;
  border-color: ${({ theme }) => theme.button.borderColor};
  border-radius: 4px;
  padding: 12px 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  width: fit-content;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.button.focusShadowColor};
  }

  &:active {
    box-shadow: 0 2px ${({ theme }) => theme.button.selectedShadowColor} inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
    gap: 12px;
  }
`;

export const MessageIcon = styled(Message)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 20px;
    height: 20px;
  }
`;
