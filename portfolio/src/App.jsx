import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="bg-gray-900 font-sans">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;