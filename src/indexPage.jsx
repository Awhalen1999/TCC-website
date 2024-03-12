import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import FeaturedMain from './components/FeaturedMain.jsx';
import UpcomingMain from './components/UpcomingMain.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeaturedMain />
      <UpcomingMain />
      <Footer />
    </div>
  );
};

export default App;
