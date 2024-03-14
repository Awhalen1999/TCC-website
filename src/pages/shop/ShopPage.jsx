import React from 'react';
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
      <div className='flex justify-center items-center'>
        <div className='w-3/4 font-semibold'>
          <h1 className='text-3xl font-bold mb-6 text-center'>
            CUSTOM ORDER FORM
          </h1>
          <h2 className='text-lg mb-4'>
            Thank you for considering a custom order with us! This form serves
            as an inquiry, and there's absolutely no commitment required at this
            time. Crafting these custom rugs takes a considerable amount of time
            and care. If you're curious about pricing before proceeding, feel
            free to check it out{' '}
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
              <h1 className='text-3xl font-bold mb-4 text-center'>
                Starting Prices
              </h1>
              <div className='overflow-x-auto border-black border rounded-xl w-full'>
                <table className='table w-full  '>
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
                      <th className='border-t border-black'>1' x 1'</th>
                      <td className='border-t border-black'>125$</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th className='border-t border-black'>2' x 2'</th>
                      <td className='border-t border-black'>200$</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th className='border-t border-black'>3' x 3'</th>
                      <td className='border-t border-black'>300$</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th className='border-t border-black'>4' x 4'</th>
                      <td className='border-t border-black'>400$</td>
                    </tr>
                    {/* row 5 */}
                    <tr>
                      <th className='border-t border-black'>5' x 5'</th>
                      <td className='border-t border-black'>500$</td>
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
            We want to be upfront with you: it might take anywhere from 2 to 5
            weeks to finish your order. It all depends on the size, detail, and
            how many orders we've got lined up before yours. But don't worry,
            we'll keep you in the loop every step of the way!
          </h2>

          <h2 className='text-lg mb-4'>
            Oh, and one more thing: the starting prices can vary depending on
            how intricate the design is and the colors you choose. Thanks for
            understanding!
          </h2>

          <h2 className='text-lg mb-4'>
            Looking forward to creating something special with you!
          </h2>
        </div>
      </div>

      {/* form */}
      <div className='space-y-4 mt-8 w-1/2 mx-auto'>
        <label className='flex flex-col'>
          <span className='text-gray-700 text-lg mb-1'>Name</span>
          <input
            type='text'
            className='input input-bordered text-lg'
            placeholder='Enter your name'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-gray-700 text-lg mb-1'>Email</span>
          <input
            type='text'
            className='input input-bordered text-lg'
            placeholder='Enter your email address'
          />
        </label>
        <label className='flex flex-col'>
          <div className='flex items-center'>
            <span className='text-gray-700 text-lg mb-1 mr-2'>
              Additional Form of Contact (Instagram)
            </span>
            <span className='badge badge-info'>Optional</span>
          </div>
          <input
            type='text'
            className='input input-bordered text-lg'
            placeholder='Enter your Instagram handle'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-gray-700 text-lg mb-1'>Size of rug</span>
          <select className='select select-bordered w-full text-lg'>
            <option disabled selected>
              Select size
            </option>
            <option>1' x 1'</option>
            <option>2' x 2'</option>
            <option>3' x 3'</option>
            <option>4' x 4'</option>
            <option>5' x 5'</option>
          </select>
        </label>
        <label className='flex flex-col'>
          <span className='text-gray-700 text-lg mb-1'>Upload file</span>
          <input
            type='file'
            className='file-input file-input-bordered w-full  text-lg'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-gray-700 text-lg mb-1'>Additional notes</span>
          <input
            type='text'
            className='input input-bordered w-full  text-lg'
            placeholder='Enter any additional notes here'
          />
        </label>
        <div className='flex justify-center'>
          <button className='btn btn-wide btn-primary text-lg mt-2'>
            Submit
          </button>
        </div>
      </div>

      {/* end of form */}
      {/* FAQ */}
      <h1 className='text-3xl font-bold mb-4 mt-8'>FAQ</h1>
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-200 mb-4'
      >
        <div className='collapse-title text-xl font-medium'>
          How long does it usually take to hear back concerning the custom rug?
        </div>
        <div className='collapse-content'>
          <p>
            As fast as possible! Our aim is to get back to you promptly. Our
            usual response time will be within 24 hours. We understand the
            excitement of starting a custom project and strive to make the
            process as seamless as possible.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-200 mb-4'
      >
        <div className='collapse-title text-xl font-medium'>
          Can I choose any size and shape for my custom rug?
        </div>
        <div className='collapse-content'>
          <p>
            Yes, rugs can be any size and shape. The sizing will be determined
            by the largest part of the rug. However, if your rug ends up being
            an unusually proportion (ex. 3' x 1'), the price will be discussed
            further.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-200 mb-4'
      >
        <div className='collapse-title text-xl font-medium'>
          Can I see samples of previous custom rugs?
        </div>
        <div className='collapse-content'>
          <p>Yes, we have a gallery of custom rugs [here].</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-200 mb-4'
      >
        <div className='collapse-title text-xl font-medium'>
          Do you offer design assistance for custom rugs?
        </div>
        <div className='collapse-content'>
          <p>
            Yes, we often offer assistance in helping bring our customers ideas
            to life. We offer unlimited design revisions until you are in love
            with the design before we begin the creation process.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-200'
      >
        <div className='collapse-title text-xl font-medium'>
          Are there any design limitations or restrictions for custom rug
          orders?
        </div>
        <div className='collapse-content'>
          <p>
            We try our best to make any designs come to life. However, some
            designs with small text or very intricate details may not lend
            themselves well to rug creation. In such cases, we will work closely
            with you to revise the design to ensure it looks perfect.
          </p>
        </div>
      </div>
      {/* contact */}
      <div className='px-10 py-5 font-main mt-8'>
        <h1 className='text-3xl font-bold mb-4'>
          Contact us for further information
        </h1>
        <p className='text-lg font-semibold'>Email Us</p>
        <a
          href='mailto:TuftCraftCreations@gmail.com'
          className='text-lg hover:underline'
        >
          TuftCraftCreations@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ShopPage;
