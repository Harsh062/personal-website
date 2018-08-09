import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SideNavBar from './components/SideNav';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

class App extends Component {
  handleScroll = () => {
    console.log('user scrolling');
  }
  render() {
    return (
      <div>
        <SideNavBar />
        <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        </main>
      </div>
    );
  }
}

export default App;
