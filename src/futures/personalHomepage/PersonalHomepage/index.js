import { Wrapper } from "../../../common/Wrapper";
import { Mode } from "../../../common/Mode";
import { Header } from "./Header";
import { Section } from "../../../common/Section";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { selectMode } from "../../../common/Mode/themeSlice";

export const PersonalHomepage = () => {
  const mode = useSelector(selectMode);
  console.log(mode);
  return (
    <Wrapper>
      <Mode />
      <Header>header</Header>
      <Section title="My skillset includes">
        section: My skillset includes
      </Section>
      <Section title="What I want to learn next">
        section: What I want to learn next
      </Section>
      <Section title="Portfolio">section: Portfolio</Section>
      <Footer>footer</Footer>
    </Wrapper>
  );
};
