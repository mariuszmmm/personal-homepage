import { TooltipWrapper } from "./styled";

export const Tooltip = ({ active, text }) => (
  <TooltipWrapper $active={active}>{text}</TooltipWrapper>
);
