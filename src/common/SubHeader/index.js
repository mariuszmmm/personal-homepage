import { Header, Icon } from "./styled";

export const SubHeader = ({ title, src }) => (
  <Header>
    {title}<Icon src={src} />
  </Header>
);
