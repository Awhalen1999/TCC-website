import React from 'react';
import heroImage from '../assets/hero-image.png';

const hero = () => {
  return (
    <div
      className='hero min-h-screen bg-base-200'
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className='hero-overlay bg-black bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl text-gray-100 font-bold'>
            TuftCraft Creations
          </h1>
          <p className='mb-5 text-xl font-semi-bold text-gray-100'>
            High-quality custom 1-of-1 rugs, uniquely handcrafted for your
            space.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default hero;
