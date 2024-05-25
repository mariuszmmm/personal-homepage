import { useState } from "react";
import { useTooltip } from "./useTooltip";
import { Tooltip } from "../Tooltip";
import { Link, Links, Text, Wrapper } from "./styled";
import { Title } from "../Title";

export const Tile = ({ repo, index }) => {
  const [demoIsHovered, setDemoIsHovered] = useState(false);
  const [codeIsHovered, setCodeIsHovered] = useState(false);

  const {
    handleDemoMouseEnter,
    handleCodeMouseEnter,
    handleDemoMouseLeave,
    handleCodeMouseLeave,
  } = useTooltip(setDemoIsHovered, setCodeIsHovered);

  const isEven = index % 2 === 0;

  return (
    <Wrapper>
      <Title>{repo.name}</Title>
      <Text>{repo.description}</Text>
      <Links>
        <Text>
          <span>Demo:</span>
          {repo.html_url && (
            <Link
              onMouseEnter={handleDemoMouseEnter}
              onMouseLeave={handleDemoMouseLeave}
            >
              {repo.html_url}
            </Link>
          )}
          <Tooltip
            active={demoIsHovered}
            text={repo.html_url}
            isEven={isEven}
          />
        </Text>
        <Text>
          <span>Code:</span>
          {repo.homepage && (
            <Link
              onMouseEnter={handleCodeMouseEnter}
              onMouseLeave={handleCodeMouseLeave}
            >
              {repo.homepage}
            </Link>
          )}
          <Tooltip
            active={codeIsHovered}
            text={repo.homepage}
            isEven={isEven}
          />
        </Text>
      </Links>
    </Wrapper>
  );
};
