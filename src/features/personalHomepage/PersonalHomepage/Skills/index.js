import { Section } from "../Section/index.js";
import { SubHeader } from "../SubHeader/index.js";
import tools from "./tools.png";
import { List } from "../List/index.js";
import { ListItem } from "../List/ListItem/index.js";
import { Dot } from "../List/ListItem/Dot/index.js";

export const Skills = ({ skills }) => (
  <Section>
    <SubHeader title={"My skillset includes"} src={tools} alt="" skills />
    <List>
      {skills.map((item, index) => (
        <ListItem key={index}>
          <Dot /> {item}
        </ListItem>
      ))}
    </List>
  </Section>
);
