import {
  Content,
  Wrapper,
  Image,
  Caption,
  Name,
  Description,
  MessageIcon,
} from "./styled";
import foto from "./images/foto.jpg";
import face from "./images/face.png";
import laptop from "./images/laptop.png";
import { Emoji } from "../Emoji";
import { ButtonLink } from "../ButtonLink";

export const Header = ({ name, email, description }) => (
  <Wrapper>
    <Image src={foto} alt={name} />
    <Content>
      <Caption>this is</Caption>
      <Name>{name}</Name>
      <Description>
        <Emoji src={face} alt="" />
        <Emoji src={laptop} alt="" />
        {"  "}&nbsp;{description}
      </Description>
      <ButtonLink href={`mailto:${email}`}>
        <MessageIcon /> Hire Me
      </ButtonLink>
    </Content>
  </Wrapper>
);
