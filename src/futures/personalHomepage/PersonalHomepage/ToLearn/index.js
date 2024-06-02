import { Section } from "../../../../common/Section/index.js";
import { SubHeader } from "../../../../common/SubHeader/index.js";
import rocket from "./rocket.png";
import { List } from "../../../../common/List/index.js";
import { ListItem } from "../../../../common/ListItem/index.js";
import { Dot } from "../../../../common/ListItem/Dot";

export const ToLearn = ({ toLearn }) => (
  <Section>
    <SubHeader title={"What I want to learn next"} src={rocket} alt="" />
    <List>
      {toLearn.map((item, index) => (
        <ListItem key={index}>
          <Dot /> {item}
        </ListItem>
      ))}
    </List>
  </Section>
);
