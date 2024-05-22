import { Section } from "../../../../common/Section/index.js";
import { SubHeader } from "../../../../common/SubHeader/index.js";
import { skills } from "./skills.js";
import tools from "../Skills/tools.png";
import { List } from "../../../../common/List/index.js";
import { ListItem } from "../../../../common/ListItem/index.js";
import { Dot } from "../../../../common/Dot/index.js";

export const Skills = () => {
  return (
    <Section>
      <SubHeader title={"My skillset includes"} src={tools} skills />
      <List>
        {skills.map((item, index) => (
          <ListItem key={index}>
            <Dot /> {item}
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
