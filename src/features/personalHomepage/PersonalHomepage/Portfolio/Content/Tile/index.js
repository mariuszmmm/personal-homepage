import { useState } from "react";
import { useTooltip } from "./useTooltip";
import { Link, Links, Text, Wrapper } from "./styled";
import { Title } from "../../Title";
import { Tooltip } from "../../../Tooltip";

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
          {repo.homepage && (
            <Link
              href={repo.homepage}
              target="_blank"
              onMouseEnter={handleDemoMouseEnter}
              onMouseLeave={handleDemoMouseLeave}
            >
              {repo.homepage}
            </Link>
          )}
          <Tooltip $active={demoIsHovered} $moveToRight={!isEven}>
            {repo.homepage}
          </Tooltip>
        </Text>
        <Text>
          <span>Code:</span>
          {repo.html_url && (
            <Link
              href={repo.html_url}
              target="_blank"
              onMouseEnter={handleCodeMouseEnter}
              onMouseLeave={handleCodeMouseLeave}
            >
              {repo.html_url}
            </Link>
          )}
          <Tooltip $active={codeIsHovered} $moveToRight={!isEven}>
            {repo.html_url}
          </Tooltip>
        </Text>
      </Links>
    </Wrapper>
  );
};
