import { Wrapper } from "../../../common/Wrapper";
import { Mode } from "../../../common/Mode";
import { Header } from "./Header";
import { Section } from "../../../common/Section";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { ToLearn } from "./ToLearn";

export const PersonalHomepage = () => {

  return (
    <Wrapper>
      <Mode />
      <Header />
      <Skills />
      <ToLearn />
      <Section title="Portfolio">section: Portfolio</Section>
      <Footer>footer</Footer>
    </Wrapper>
  );
};
