import React , {useEffect} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,Link,
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

      <Link to = '#home' ></Link>
      <div className="goToTop w-5 h-5 bg-white">

      </div>
    </Router>
  );
}

export default App;
