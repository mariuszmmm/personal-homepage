import { Title } from "../Title";
import { DangerIcon, ErrorWrapper, Info } from "./styled";
import { Button } from "../Button";

export const Error = () => (
  <ErrorWrapper>
    <DangerIcon />
    <Title error>Ooops! Something went wrong... </Title>
    <Info>
      Sorry, failed to load Github projects.
      <br /> You can check them directly on Github.
    </Info>
    <Button>Go to Github</Button>
  </ErrorWrapper>
);
