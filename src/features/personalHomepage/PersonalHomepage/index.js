import { Wrapper } from "./Wrapper";
import { Mode } from "../../../common/Mode";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { personData } from "./personData";
import tools from "./images/tools.png";
import rocket from "./images/rocket.png";

export const PersonalHomepage = () => {
  const { name, email, description, skills, toLearn, githubData, invitation } =
    personData;

  return (
    <Wrapper>
      <Mode />
      <Header name={name} email={email} description={description} />
      <main>
        <Skills title="My skillset includes" src={tools} skills={skills} line />
        <Skills
          title="What I want to learn next"
          src={rocket}
          skills={toLearn}
        />
        <Portfolio githubData={githubData} />
      </main>
      <Footer email={email} invitation={invitation} />
    </Wrapper>
  );
};
