import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <section id="home" className="h-screen flex items-center justify-center bg-slate-900 ">
         <HeroSection/>
        </section>
        <section id="about" className="h-screen flex items-center justify-center bg-slate-800">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </section>
        <section id="projects" className="h-screen flex items-center justify-center bg-slate-900">
          <h2 className="text-3xl font-bold text-white">My Projects</h2>
        </section>
        <section id="skills" className="h-screen flex items-center justify-center bg-slate-800">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center bg-slate-900">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
        </section>
      </main>
    </div>
  )
}

export default App
