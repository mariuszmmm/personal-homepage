import { Link, Links, Text, Title, Wrapper } from "./styled";

export const Tile = ({ repo }) => (
  <Wrapper>
    <Title>{repo.name}</Title>
    <Text>{repo.description}</Text>
    <Links>
      <Text>
        <span>Demo:</span>
        <Link>  {repo.html_url}</Link>
      </Text>
      <Text>
        <span>Code: </span>
        <Link>{repo.homepage}   </Link>
      </Text>
    </Links>
  </Wrapper>
);
