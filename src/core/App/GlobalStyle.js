import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  body {
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    min-width: 320px;
    transition: background 0.5s ease-in-out;
    margin: 0 auto;
    overflow-y: scroll;
  };
`;

export default GlobalStyle;
