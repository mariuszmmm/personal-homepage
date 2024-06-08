import { Wrapper } from "./Wrapper";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { personData } from "./personData";
import tools from "./images/tools.png";
import rocket from "./images/rocket.png";

export const PersonalHomepage = () => {
  const { skills, toLearn } = personData;

  return (
    <Wrapper>
      <ThemeSwitch />
      <Header />
      <main>
        <Skills title="My skillset includes" src={tools} skills={skills} line />
        <Skills
          title="What I want to learn next"
          src={rocket}
          skills={toLearn}
        />
        <Portfolio />
      </main>
      <Footer />
    </Wrapper>
  );
};
