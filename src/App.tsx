import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-slate-900 "
        >
          <HeroSection />
        </section>
        <section
          id="about"
          className="bg-slate-800 py-20 px-4 sm:px-6 lg:px-8 text-white"
        >
          <AboutSection />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-slate-900"
        >
          <ProjectSection />
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center bg-slate-800"
        >
          <SkillsSection/>
        </section>
        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-slate-900"
        >
          <ContactSection/>
        </section>
      </main>
    </div>
  );
}

export default App;
