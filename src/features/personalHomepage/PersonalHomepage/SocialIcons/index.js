import { Wrapper, Item, Link } from "./styled.js";
import { socials } from "./socials.js";
import { Tooltip } from "../Tooltip";
import { useState } from "react";

export const SocialIcons = () => {
  const [hovered, setHovered] = useState();

  return (
    <Wrapper>
      {socials.map(
        ({ name, url, Icon }, index) =>
          url && (
            <Item key={name}>
              <Link
                href={url}
                target="_blank"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(false)}
              >
                {Icon}
              </Link>
              <Tooltip $active={index === hovered} $top>
                {name}
              </Tooltip>
            </Item>
          )
      )}
    </Wrapper>
  );
};
