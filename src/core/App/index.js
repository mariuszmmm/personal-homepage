import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./GlobalStyle";
import { PersonalHomepage } from "../../features/personalHomepage/PersonalHomepage";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../common/themeSlice";

const App = () => {
  const isDarkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
