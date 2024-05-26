import { Title } from "../Title";
import { DangerIcon, ErrorWrapper, Info } from "./styled";
import { ButtonLink } from "../ButtonLink";
import { person } from "../../utils/person";

export const Error = () => {
  const { link } = person.github;

  return (
    <ErrorWrapper>
      <DangerIcon />
      <Title $error>Ooops! Something went wrong... </Title>
      <Info>
        Sorry, failed to load Github projects.
        <br /> You can check them directly on Github.
      </Info>
      <ButtonLink href={link} target="_blank">
        Go to Github
      </ButtonLink>
    </ErrorWrapper>
  );
};
