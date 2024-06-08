import {
  Content,
  Wrapper,
  Image,
  Caption,
  Name,
  Description,
  MessageIcon,
  ButtonWrapper,
} from "./styled";
import foto from "../images/foto.jpg";
import face from "../images/face.png";
import laptop from "../images/laptop.png";
import { Emoji } from "../Emoji";
import { ButtonLink } from "../ButtonLink";
import { Tooltip } from "../Tooltip";
import { useState } from "react";
import { personData } from "../personData";

export const Header = () => {
  const [hovered, setHovered] = useState();
  const { name, email, description } = personData;

  return (
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
        <ButtonWrapper>
          <ButtonLink
            href={`mailto:${email}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <MessageIcon /> Hire Me
          </ButtonLink>
          <Tooltip $active={hovered}>{email}</Tooltip>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};
