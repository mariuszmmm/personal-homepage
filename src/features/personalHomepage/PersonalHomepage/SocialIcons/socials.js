import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./styled";
import { person } from "../person";

const { socialLinks } = person;

export const socials = [
  {
    name: "Github",
    url: socialLinks.github,
    Icon: <GithubIcon />,
  },
  {
    name: "Facebook",
    url: socialLinks.facebook,
    Icon: <FacebookIcon />,
  },
  {
    name: "Linkedin",
    url: socialLinks.linkedin,
    Icon: <LinkedInIcon />,
  },
  {
    name: "Instagram",
    url: socialLinks.instagram,
    Icon: <InstagramIcon />,
  },
];
