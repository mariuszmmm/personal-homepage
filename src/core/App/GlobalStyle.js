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
    color: ${({ theme }) => theme.page.color};
    background-color: ${({ theme }) => theme.page.backgroundColor};
    font-weight: ${({ theme }) => theme.page.normal};
    max-width: 1920px;
    min-width: 320px;
    transition: background 0.5s ease-in-out;
  };
`;

export default GlobalStyle;
