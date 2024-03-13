import React from 'react';
import Nav from '../../Nav.jsx';
import Hero from './Hero.jsx';
import FeaturedHome from './FeaturedHome.jsx';
import UpcomingHome from './UpcomingHome.jsx';
import Footer from './Footer.jsx';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeaturedHome />
      <UpcomingHome />
      <Footer />
    </div>
  );
};

export default HomePage;
