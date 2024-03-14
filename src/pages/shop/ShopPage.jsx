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
      <h1 className='text-3xl font-bold mb-4 text-center'>CUSTOM ORDER FORM</h1>
      <h2 className='text-lg mb-4'>
        Thanks for considering a custom order with us! Crafting these custom
        rugs takes time and care. If you're curious about pricing before diving
        in, feel free to check it out{' '}
        <button
          className='link link-info'
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          HERE
        </button>
        .
      </h2>

      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <h1 className='text-3xl font-bold mb-4'>Starting Prices</h1>
          <div className='overflow-x-auto border rounded-xl bg-white w-[30vw]'>
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
                  <th>1' x 1'</th>
                  <td>125$</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2' x 2'</th>
                  <td>200$</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3' x 3'</th>
                  <td>300$</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4' x 4'</th>
                  <td>400$</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5' x 5'</th>
                  <td>500$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <h2 className='text-lg mb-4'>
        We want to be upfront with you: it might take anywhere from 2 to 5 weeks
        to finish your order. It all depends on the size, detail, and how many
        orders we've got lined up before yours. But don't worry, we'll keep you
        in the loop every step of the way!
      </h2>

      <h2 className='text-lg mb-4'>
        Oh, and one more thing: the starting prices can vary depending on how
        intricate the design is and the colors you choose. Thanks for
        understanding!
      </h2>

      <h2 className='text-lg mb-4'>
        Looking forward to creating something special with you!
      </h2>

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
