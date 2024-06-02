import { Caption, Wrapper, Description, Mail } from "./styled";
import crossedFingers from "./crossedFingers.svg";
import { Emoji } from "../Emoji";
import { SocialIcons } from "../SocialIcons";

export const Footer = ({ email, invitation }) => (
  <Wrapper>
    <Caption>Let’s talk!</Caption>
    <Mail href={`mailto:${email}`}>{email}</Mail>
    <Description>
      {invitation} <Emoji src={crossedFingers} alt="" $footer />
    </Description>
    <SocialIcons />
  </Wrapper>
);
