import { useDispatch, useSelector } from "react-redux";
import { ModeContainer, ModeInfo, Icon, Switch, IconWrapper } from "./styled";
import { selectMode, switchMode } from "./modeSlice";

export const Mode = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  return (
    <ModeContainer onClick={() => dispatch(switchMode())}>
      <ModeInfo>dark mode {mode === "dark" ? "on" : "off"}</ModeInfo>
      <Switch>
        <IconWrapper $moveToRight={mode === "dark"}>
          <Icon />
        </IconWrapper>
      </Switch>
    </ModeContainer>
  );
};
