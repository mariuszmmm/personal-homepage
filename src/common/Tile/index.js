import { Link, Links, Text, Title, Wrapper } from "./styled";

export const Tile = () => (
  <Wrapper>
    <Title>Tile</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem eos
      adipisci modi, porro laboriosam? Qui, eaque omnis animi sapiente neque
      ipsam nisi tenetur repudiandae, porro, minus expedita aut error!
    </Text>
    <Links>
      <Text>
        <span>Demo:</span>
        <Link>link do demo</Link>
      </Text>
      <Text>
        <span>Code: </span>
        <Link>link do github</Link>
      </Text>
    </Links>
  </Wrapper>
);
