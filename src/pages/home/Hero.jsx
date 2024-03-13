import React from 'react';
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <div
      className='hero min-h-screen bg-base-200'
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className='hero-overlay bg-black bg-opacity-60 '></div>
      <div className='hero-content text-center text-neutral-content font-main'>
        <div className='max-w-lg'>
          <h1 className='mb-5 text-5xl text-[#FFFDD0] font-bold font-header'>
            TuftCraft Creations
          </h1>
          <p className='mb-5 text-xl font-medium text-[#FFFDD0]'>
            High-quality custom 1-of-1 rugs, uniquely handcrafted for your
            space.
          </p>
          <button className='btn btn-primary lg:btn-lg md:btn-primary'>
            Shop Rugs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
