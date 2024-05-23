import { Wrapper } from "../../../common/Wrapper";
import { Mode } from "../../../common/Mode";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { ToLearn } from "./ToLearn";
import { Portfolio } from "./Portfolio";

export const PersonalHomepage = () => {
  return (
    <Wrapper>
      <Mode />
      <Header />
      <Skills />
      <ToLearn />
      <Portfolio />
      <Footer />
    </Wrapper>
  );
};
