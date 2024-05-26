import {
  Caption,
  FooterWrapper,
  Description,
  Mail,
  IconWrapper,
  Link,
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
  const { email, invitation, github, facebook, linkedin, instagram } = person;

  return (
    <FooterWrapper>
      <Caption>Let’s talk!</Caption>
      <Mail href={`mailto:${email}`}>{email}</Mail>
      <Description>
        {invitation}
        <Emoji src={crossedFingers} $footer />
      </Description>
      <IconWrapper>
        {github?.link && (
          <Link href={github.link} target="_blank">
            <GithubIcon />
          </Link>
        )}
        {facebook?.link && (
          <Link href={facebook.link} target="_blank">
            <FacebookIcon />
          </Link>
        )}
        {linkedin?.link && (
          <Link href={linkedin.link} target="_blank">
            <LinkedInIcon />
          </Link>
        )}
        {instagram?.link && (
          <Link href={instagram.link} target="_blank">
            <InstagramIcon />
          </Link>
        )}
      </IconWrapper>
    </FooterWrapper>
  );
};
