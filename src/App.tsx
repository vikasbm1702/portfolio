import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import PersonalInfo from './components/PersonalInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <PersonalInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
