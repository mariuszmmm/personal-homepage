import { Header, Icon } from "./styled";

export const SubHeader = ({ title, src, skills }) => (
  <Header $skills={skills}>
    {title}
    {src && <Icon src={src} />}
  </Header>
);
