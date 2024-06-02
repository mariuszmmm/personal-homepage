import { Section } from "../Section";
import { SubHeader } from "../SubHeader";
import rocket from "./rocket.png";
import { List } from "../List";
import { ListItem } from "../List/ListItem";
import { Dot } from "../List/ListItem/Dot";

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
