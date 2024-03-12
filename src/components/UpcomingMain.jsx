import React from 'react';
import OnePiecePreview from '../assets/one-piece-preview.png';
import HunterPreview from '../assets/hunter-preview.png';

const UpcomingMain = () => {
  return (
    <div className='w-[90vw] mx-auto font-main my-20 flex flex-col'>
      <h2 className='text-4xl font-bold mb-5 font-header text-left'>
        Upcoming Collections
      </h2>

      <div className='flex justify-center w-full'>
        <img
          src={OnePiecePreview}
          alt='One Piece Preview'
          className='w-[45vw] h-auto'
        />
        <img
          src={HunterPreview}
          alt='Hunter Preview'
          className='w-[45vw] h-auto'
        />
      </div>
    </div>
  );
};

export default UpcomingMain;
