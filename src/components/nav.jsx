import React, { useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { HiMenuAlt2 } from 'react-icons/hi';

const Nav = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <div className='navbar bg-base-100 border'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <HiMenuAlt2 className='h-7 w-7 text-current' />
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>TuftCraft Creations</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <li className='flex items-center'>
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              className='theme-controller mr-3'
              onChange={(e) => {
                if (e.target.checked) {
                  document.documentElement.setAttribute('data-theme', 'light');
                } else {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              }}
            />
            {/* sun icon */}
            <FiSun className='swap-off fill-current w-7 h-7' />
            {/* moon icon */}
            <FiMoon className='swap-on fill-current w-7 h-7' />
          </label>
        </li>
        <a className='btn btn-ghost btn-outline ml-4'>Button</a>
      </div>
    </div>
  );
};

export default Nav;
