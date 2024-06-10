import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App flex flex-col relative">
      <Navbar />
      <Home />
      <About/>
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
