import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const FeaturedHome = () => {
  return (
    <div className='w-[90vw] mx-auto mt-20'>
      <h2 className='text-4xl font-bold mb-5 font-header text-left'>
        Featured <FaAngleDoubleRight className='inline-block ml-2' />
      </h2>
      <div className='carousel rounded-box'>
        <div className='carousel-item'>
          <img
            src='https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg'
            alt='Burger'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg'
            alt='Burger'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg'
            alt='Burger'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg'
            alt='Burger'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg'
            alt='Burger'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg'
            alt='Burger'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg'
            alt='Burger'
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedHome;
