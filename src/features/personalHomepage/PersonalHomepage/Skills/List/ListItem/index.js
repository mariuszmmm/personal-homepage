import styled from "styled-components";

export const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  list-style: none;
  display: flex;
  align-items: baseline;
  align-self: flex-start;
  gap: 16px;
  padding-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 14px;
    line-height: 1.2;
    gap: 8px;
    padding-right: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding-right: 0;
  }
`;
