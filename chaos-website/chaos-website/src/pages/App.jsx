import React from 'react';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <div className="font-sans">
      <Home />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
};

export default App;