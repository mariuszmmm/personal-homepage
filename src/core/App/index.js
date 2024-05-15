import { Header } from "../../futures/personalHomepage/PersonalHomepage/Header";
import { Section } from "../../common/Section";
import { Footer } from "../../futures/personalHomepage/PersonalHomepage/Footer";
import { Mode } from "../../futures/personalHomepage/PersonalHomepage/Mode"

const App = () => {
  
  return (
    <>
      <Mode />
      <Header>
        header
      </Header>
      <Section title="My skillset includes">
        section: My skillset includes
      </Section>
      <Section title="What I want to learn next">
        section: What I want to learn next
      </Section>
      <Section title="Portfolio">
        section: Portfolio
      </Section>
      <Footer>
        footer
      </Footer>
    </>
  )
}

export default App;
