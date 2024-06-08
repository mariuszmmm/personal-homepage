import { Caption, Wrapper, Description, Mail } from "./styled";
import crossedFingers from "../images/crossedFingers.svg";
import { Emoji } from "../Emoji";
import { SocialIcons } from "../SocialIcons";
import { personData } from "../personData";

export const Footer = () => {
  const { email, invitation } = personData;

  return (
    <Wrapper>
      <Caption>Let’s talk!</Caption>
      <Mail href={`mailto:${email}`}>{email}</Mail>
      <Description>
        {invitation} <Emoji src={crossedFingers} alt="" $footer />
      </Description>
      <SocialIcons />
    </Wrapper>
  );
};
