import React from 'react';
import { GoDot } from 'react-icons/go';
import { FiInfo } from 'react-icons/fi';

const ShopPage = () => {
  return (
    <div className='px-10 py-5 font-main'>
      {/* alert */}
      <div role='alert' className='alert alert-info mb-10'>
        <div className='flex-1'>
          <FiInfo size={24} />
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-4 text-info-content'>
            Custom Rug Commissions Only
          </h1>
          <h2 className='text-xl mb-4'>
            We are currently focused on completing custom rug commissions. One
            piece and HunterxHunter collections will be available soon. Get
            started by submitting your custom rug commissions below.
          </h2>
        </div>
      </div>
      {/* end of alert */}
      <h1 className='text-3xl font-bold mb-4'>Create your custom rug</h1>
      <h2 className='text-2xl font-semibold mb-4'>How it works</h2>
      {/* steps */}
      <ul className='steps steps-vertical'>
        <li className='step'>Choose a rug sizing</li>
        <li className='step'>Upload an image</li>
        <li className='step'>Add design specifications</li>
        <li className='step'>Wait for email</li>
      </ul>
      {/* end of steps */}
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>Sizing</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1x1</th>
              <td>125$</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2x2</th>
              <td>200$</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3x3</th>
              <td>300$</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4x4</th>
              <td>400$</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className='text-3xl font-bold mb-4 mt-8'>FAQ</h1>
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-200 mb-4'
      >
        <div className='collapse-title text-xl font-medium'>
          Focus me to see content
        </div>
        <div className='collapse-content'>
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-200 mb-4'
      >
        <div className='collapse-title text-xl font-medium'>
          Focus me to see content
        </div>
        <div className='collapse-content'>
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-200'
      >
        <div className='collapse-title text-xl font-medium'>
          Focus me to see content
        </div>
        <div className='collapse-content'>
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <h1 className='text-3xl font-bold mb-4 mt-8'>
        Contact us for further information
      </h1>
      <p className='text-lg mb-4'>TuftCraftCreations@gmail.com</p>
    </div>
  );
};

export default ShopPage;
