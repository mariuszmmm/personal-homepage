import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ThemeInfo, Icon, Switch, IconWrapper } from "./styled";
import { selectDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectDarkTheme);

  return (
    <Wrapper onClick={() => dispatch(toggleTheme())}>
      <ThemeInfo>dark mode {isDarkTheme ? "on" : "off"}</ThemeInfo>
      <Switch>
        <IconWrapper $moveToRight={isDarkTheme}>
          <Icon />
        </IconWrapper>
      </Switch>
    </Wrapper>
  );
};
