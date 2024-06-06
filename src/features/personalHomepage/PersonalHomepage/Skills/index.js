import { Section } from "../Section";
import { SubHeader } from "./styled.js";
import { List } from "./List";
import { ListItem } from "./List/ListItem";
import { Dot } from "./List/ListItem/Dot";
import { Emoji } from "../Emoji";

export const Skills = ({ title, src, skills, line }) => (
  <Section>
    <SubHeader $skills={skills} $line={line}>
      {title}
      {src && <Emoji src={src} alt="" $skill />}
    </SubHeader>
    <List>
      {skills.map((item, index) => (
        <ListItem key={index}>
          <Dot /> {item}
        </ListItem>
      ))}
    </List>
  </Section>
);
