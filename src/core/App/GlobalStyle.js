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
    background-color: ${({ theme }) => theme.page.primaryBackgroundColor};
    font-weight: ${({ theme }) => theme.page.normal};
    min-width: 320px;
    transition: background 0.5s ease-in-out;
    margin: 0 auto;
    user-select: none;
  };
`;

export default GlobalStyle;
