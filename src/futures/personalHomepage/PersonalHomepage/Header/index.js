import {
  Content,
  HeaderWrapper,
  Image,
  Caption,
  Name,
  Description,
  MessageIcon,
} from "./styled";
import foto from "../../../../images/foto.jpg";
import face from "../../../../images/face.png";
import laptop from "../../../../images/laptop.png";
import { Emoji } from "../../../../common/Emoji";
import { ButtonLink } from "../../../../common/ButtonLink";
import { person } from "../../../../utils/person";

export const Header = () => {
  const { email, description } = person;

  return (
    <HeaderWrapper>
      <Image src={foto} />
      <Content>
        <Caption>this is</Caption>
        <Name>Mariusz Matusiewicz</Name>
        <Description>
          <Emoji src={face} />
          <Emoji src={laptop} />
          {"  "}&nbsp;{description}
        </Description>
        <ButtonLink href={`mailto:${email}`}>
          <MessageIcon /> Hire Me
        </ButtonLink>
      </Content>
    </HeaderWrapper>
  );
};
