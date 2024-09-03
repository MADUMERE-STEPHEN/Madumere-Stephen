import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Skill from './components/skills';

import Footer from './components/footer';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projects />
    <Skill />
    <Footer />
    </>
      );
  
}

export default App;
