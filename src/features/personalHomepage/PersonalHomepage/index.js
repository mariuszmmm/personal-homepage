import { Wrapper } from "./Wrapper";
import { Mode } from "../../../common/Mode";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { ToLearn } from "./ToLearn";
import { Portfolio } from "./Portfolio";
import { personData } from "./personData";

export const PersonalHomepage = () => {
  const { name, email, description, skills, toLearn, githubData, invitation } =
    personData;
  return (
    <Wrapper>
      <Mode />
      <Header name={name} email={email} description={description} />
      <main>
        <Skills skills={skills} />
        <ToLearn toLearn={toLearn} />
        <Portfolio githubData={githubData} />
      </main>
      <Footer email={email} invitation={invitation} />
    </Wrapper>
  );
};
