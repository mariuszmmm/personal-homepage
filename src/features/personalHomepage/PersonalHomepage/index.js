import { Wrapper } from "./Wrapper";
import { Mode } from "../../../common/Mode";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { ToLearn } from "./ToLearn";
import { Portfolio } from "./Portfolio";
import { person } from "./person";

export const PersonalHomepage = () => {
  const { name, email, description, skills, toLearn, github, invitation } =
    person;
  return (
    <Wrapper>
      <Mode />
      <Header name={name} email={email} description={description} />
      <main>
        <Skills skills={skills} />
        <ToLearn toLearn={toLearn} />
        <Portfolio
          username={github.username}
          excludedRepositories={github.excludedRepositories}
        />
      </main>
      <Footer email={email} invitation={invitation} />
    </Wrapper>
  );
};
