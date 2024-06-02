import { Wrapper, Item, Link, Tooltip } from "./styled.js";
import { socials } from "./socials.js";

export const SocialIcons = () => (
  <Wrapper>
    {socials.map(
      ({ name, url, Icon }) =>
        url && (
          <>
            <Item key={name}>
              <Link href={url} title={name} target="_blank">
                {Icon}
              </Link>
              {/* <Tooltip $active="true">{name}</Tooltip> */} 
            </Item>
          </>
        )
    )}
  </Wrapper>
);
