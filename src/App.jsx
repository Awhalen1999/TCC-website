import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import FeaturedMain from './components/FeaturedMain.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeaturedMain />
      <Footer />
    </div>
  );
};

export default App;
