import { Section } from "../../../../common/Section/index.js";
import { SubHeader } from "../../../../common/SubHeader/index.js";
import tools from "./tools.png";
import { List } from "../../../../common/List/index.js";
import { ListItem } from "../../../../common/ListItem/index.js";
import { Dot } from "../../../../common/ListItem/Dot";

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
