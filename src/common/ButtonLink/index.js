import styled from "styled-components";

export const ButtonLink = styled.a`
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
  text-decoration: none;
  transition: box-shadow 0.3s ease-in-out;

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
