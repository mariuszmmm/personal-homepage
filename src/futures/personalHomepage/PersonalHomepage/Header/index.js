import { HeaderWrapper, Image } from "./styled";
import foto from "./foto.jpg";
export const Header = () => {
  return (
    <HeaderWrapper>
      <Image src={foto}  />
      <Content>
      <ThisIs />
      <Name>Mariusz Matusiewicz</Name>
      <Description>

      </Description>
      </Content>
    </HeaderWrapper>
  );
};
