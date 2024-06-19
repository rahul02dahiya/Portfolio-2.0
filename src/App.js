import React , {useEffect} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';

const ScrollToTop = ()=>{
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App flex flex-col relative">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </div>

      <a href = '#home' >
      <div className="goToTop w-10 h-10 bg-white rounded-full fixed bottom-10 right-10 flex justify-center text-cyan-800 text-xl items-center">
      <i className="fa-solid fa-arrow-up"></i>
      </div>
      </a>
    </Router>
  );
}

export default App;
