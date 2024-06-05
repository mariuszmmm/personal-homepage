import { Title } from "../Title";
import { DangerIcon, Wrapper, Info } from "./styled";
import { ButtonLink } from "../../../ButtonLink";
import { personData } from "../../../personData";

export const Error = () => {
  const { github } = personData.socialLinks;

  return (
    <Wrapper>
      <DangerIcon />
      <Title $error>Ooops! Something went wrong... </Title>
      <Info>
        Sorry, failed to load Github projects.
        <br /> You can check them directly on Github.
      </Info>
      <ButtonLink href={github} target="_blank">
        Go to Github
      </ButtonLink>
    </Wrapper>
  );
};
