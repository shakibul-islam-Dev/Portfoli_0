import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import TechStack from "./Components/TechStack/TechStack";
import ProjectSection from "./Components/Projects/ProjectSection";
import AboutMe from "./Components/About/About";
import ContactInfo from "./Components/Contact/ContactInfo";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-black">
      <Navigation />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <AboutMe />
        <TechStack />
        <ProjectSection />
        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
}
