import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./GlobalStyle";
import { PersonalHomepage } from "../../futures/personalHomepage/PersonalHomepage";
import { useSelector } from "react-redux";
import { selectMode } from "../../common/Mode/themeSlice";

const App = () => {
  const mode = useSelector(selectMode);

  return (
    <ThemeProvider theme={mode === "dark" ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
