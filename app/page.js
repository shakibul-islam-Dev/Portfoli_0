import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import TechStack from "./Components/TechStack/TechStack";
import ProjectSection from "./Components/Projects/ProjectSection";
import AboutMe from "./Components/About/About";
import ContactInfo from "./Components/Contact/ContactInfo";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <Navigation></Navigation>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <TechStack></TechStack>
      <ProjectSection></ProjectSection>
      <ContactInfo></ContactInfo>
      <Footer></Footer>
    </div>
  );
}
