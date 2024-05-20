import {
  Content,
  HeaderWrapper,
  Image,
  Caption,
  Name,
  Description,
  Icon,
  Button,
  MessageIcon,
} from "./styled";
import foto from "./foto.jpg";
import face from "./face.png";
import laptop from "./laptop.png";
export const Header = () => {
  return (
    <HeaderWrapper>
      <Image src={foto} />
      <Content>
        <Caption>this is</Caption>
        <Name>Mariusz Matusiewicz</Name>
        <Description>
          <Icon src={face} />
          <Icon src={laptop} /> I’m passionate about frontend development in
          React. <br />I want to develop my skills and turn my passion into
          additional work.
        </Description>
        <Button>
          <MessageIcon /> Hire Me
        </Button>
      </Content>
    </HeaderWrapper>
  );
};
