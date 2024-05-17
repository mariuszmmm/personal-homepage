import { useDispatch, useSelector } from "react-redux";
import { ModeContainer, ModeInfo, Icon, Switch, WrapperIcon } from "./styled";
import { selectMode, switchMode } from "./themeSlice";

export const Mode = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  return (
    <ModeContainer onClick={() => dispatch(switchMode())}>
      <ModeInfo>dark mode {mode === "dark" ? "on" : "off"}</ModeInfo>
      <Switch>
        <WrapperIcon moveToRight={mode === "dark"}>
          <Icon />
        </WrapperIcon>
      </Switch>
    </ModeContainer>
  );
};
