import { useEffect, useRef, useState } from "react";
import { useTooltip } from "./useTooltip";
import { Link, Links, Text, Wrapper } from "./styled";
import { Title } from "../Title";
import { Tooltip } from "../../../Tooltip";

export const Tile = ({ repo, index }) => {
  const demoRef = useRef(null);
  const codeRef = useRef(null);
  const [state, setState] = useState({
    isDemoLinkHovered: false,
    isCodeLinkHovered: false,
    isDemoLinkOversize: false,
    isCodeLinkOversize: false,
  });
  const {
    handleDemoMouseEnter,
    handleCodeMouseEnter,
    handleDemoMouseLeave,
    handleCodeMouseLeave,
  } = useTooltip(setState);
  const { name, description, homepage, html_url } = repo;
  const isEven = index % 2 === 0;

  useEffect(() => {
    const checkOversize = (ref) =>
      ref.current?.scrollWidth > ref.current?.clientWidth;

    setState((state) => ({
      ...state,
      isDemoLinkOversize: checkOversize(demoRef),
      isCodeLinkOversize: checkOversize(codeRef),
    }));
  }, []);

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
                ref={demoRef}
                href={homepage}
                target="_blank"
                onMouseEnter={handleDemoMouseEnter}
                onMouseLeave={handleDemoMouseLeave}
              >
                {homepage}
              </Link>
            </>
          )}
          {state.isDemoLinkOversize && (
            <Tooltip $active={state.isDemoLinkHovered} $moveToRight={!isEven}>
              {homepage}
            </Tooltip>
          )}
        </Text>
        <Text>
          <span>Code:</span>
          <Link
            ref={codeRef}
            href={html_url}
            target="_blank"
            onMouseEnter={handleCodeMouseEnter}
            onMouseLeave={handleCodeMouseLeave}
          >
            {html_url}
          </Link>
          {state.isCodeLinkOversize && (
            <Tooltip $active={state.isCodeLinkHovered} $moveToRight={!isEven}>
              {html_url}
            </Tooltip>
          )}
        </Text>
      </Links>
    </Wrapper>
  );
};
