import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';
import SocialMedia from './components/SocialMedia.jsx';


function App() {
  return (
    <div className="bg-gray-900 font-sans">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <SocialMedia />
      <Contact />
    </div>
  );
}

export default App;