import {
  Content,
  HeaderWrapper,
  Image,
  Caption,
  Name,
  Description,
  MessageIcon,
} from "./styled";
import foto from "./foto.jpg";
import face from "./face.png";
import laptop from "./laptop.png";
import { Emoji } from "../../../../common/Emoji";
import { Button } from "../../../../common/Button";

export const Header = () => (
  <HeaderWrapper>
    <Image src={foto} />
    <Content>
      <Caption>this is</Caption>
      <Name>Mariusz Matusiewicz</Name>
      <Description>
        <Emoji src={face} />
        <Emoji src={laptop} />
        &nbsp; I’m passionate about frontend development in React. <br />I want
        to develop my skills and turn my passion into additional work.
      </Description>
      <Button>
        <MessageIcon /> Hire Me
      </Button>
    </Content>
  </HeaderWrapper>
);
