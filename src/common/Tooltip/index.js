import { TooltipWrapper } from "./styled";

export const Tooltip = ({ active, text, isEven }) => (
  <TooltipWrapper $active={active} $isEven={isEven}>{text}</TooltipWrapper>
);
