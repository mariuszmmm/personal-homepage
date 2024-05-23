import { Section } from "../../../../common/Section/index.js";
import { SubHeader } from "../../../../common/SubHeader/index.js";
import { toLearn } from "./toLearn.js";
import rocket from "../ToLearn/rocket.png";
import { List } from "../../../../common/List/index.js";
import { ListItem } from "../../../../common/ListItem/index.js";
import { Dot } from "../../../../common/Dot/index.js";

export const ToLearn = () => {
  return (
    <Section>
      <SubHeader title={"What I want to learn next"} src={rocket}  />
      <List>
        {toLearn.map((item, index) => (
          <ListItem key={index}>
            <Dot /> {item}
          </ListItem>
        ))}
      </List>
    </Section>
  );
};