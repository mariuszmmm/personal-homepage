import { LoadingWrapper, SpinnerIcon } from "./styled";
import { Text } from "../Text";

export const Loading = () => (
  <LoadingWrapper>
    <Text>Please wait, projects are being loaded...</Text>
    <SpinnerIcon />
  </LoadingWrapper>
);
