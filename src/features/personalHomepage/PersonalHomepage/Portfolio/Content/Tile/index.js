import { useState } from "react";
import { useTooltip } from "./useTooltip";
import { Link, Links, Text, Wrapper } from "./styled";
import { Title } from "../Title";
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
  const { name, description, homepage, html_url } = repo;

  return (
    <Wrapper>
      <Title>{name}</Title>
      {description && <Text>{description}</Text>}
      <Links>
        <Text>
          {homepage && (
            <>
              <span>Demo:</span>
              <Link
                href={homepage}
                target="_blank"
                onMouseEnter={handleDemoMouseEnter}
                onMouseLeave={handleDemoMouseLeave}
              >
                {homepage}
              </Link>
            </>
          )}
          <Tooltip $active={demoIsHovered} $moveToRight={!isEven}>
            {homepage}
          </Tooltip>
        </Text>
        <Text>
          <span>Code:</span>
          {html_url && (
            <Link
              href={html_url}
              target="_blank"
              onMouseEnter={handleCodeMouseEnter}
              onMouseLeave={handleCodeMouseLeave}
            >
              {html_url}
            </Link>
          )}
          <Tooltip $active={codeIsHovered} $moveToRight={!isEven}>
            {html_url}
          </Tooltip>
        </Text>
      </Links>
    </Wrapper>
  );
};
