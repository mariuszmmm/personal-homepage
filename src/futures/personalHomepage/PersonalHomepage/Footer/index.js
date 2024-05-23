import { Caption, FooterWrapper, Description, HeaderWrapper, Mail, Emoji, IconWrapper } from "./styled";
import crossedFingers from "./crossedFingers.svg";
import { GithubIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from "../../../../common/Icon";

export const Footer = () => (
    <FooterWrapper>
      <Caption>Let’s talk!</Caption>
      <Mail>mariuszmmm@op.pl</Mail>
      <Description>
        I’m always open to new projects whenever I have the time.
        If you have a website, dashboard or mobile app in mind
        and need some help to make your ideas come to life, feel free to contact me
        <Emoji src={crossedFingers} />
      </Description>
      <IconWrapper>
        <GithubIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </IconWrapper>
    </FooterWrapper>
);