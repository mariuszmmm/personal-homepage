import {
  Caption,
  FooterWrapper,
  Description,
  Mail,
  IconWrapper,
} from "./styled";
import crossedFingers from "./crossedFingers.svg";
import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../../../../common/Icon";
import { Emoji } from "../../../../common/Emoji";
import { person } from "../../../../utils/person";

export const Footer = () => {
  const { email, invitation } = person;

  return (
    <FooterWrapper>
      <Caption>Let’s talk!</Caption>
      <Mail href={`mailto:${email}`}>{email}</Mail>
      <Description>
        {invitation}
        <Emoji src={crossedFingers} $footer />
      </Description>
      <IconWrapper>
        <GithubIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </IconWrapper>
    </FooterWrapper>
  );
};
