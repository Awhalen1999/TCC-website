import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { HiMenuAlt2 } from 'react-icons/hi';
import logo from './assets/tcc-logo.png';
import logoAlt from './assets/tcc-logo-2.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'mylight'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? 'mydark' : 'mylight';
    setTheme(newTheme);
  };

  return (
    <div className='navbar bg-base-100 font-main'>
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
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/rug-info'>Our Rugs</Link>
            </li>
            <li>
              <Link to='/product-care'>Product Care & Maintenance</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost text-xl'>
          <img
            src={theme === 'mydark' ? logoAlt : logo}
            alt='Logo'
            className='inline-block'
            style={{ height: '2em' }}
          />
          <span className='hidden sm:inline font-header'>
            TuftCraft Creations
          </span>
          <span className='sm:hidden font-header'>TCC</span>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/rug-info'>Our Rugs</Link>
          </li>
          <li>
            <Link to='/product-care'>Product Care & Maintenance</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <li className='flex items-center mr-4'>
          <label className='swap swap-rotate'>
            <input
              type='checkbox'
              className='theme-controller mr-3'
              onChange={handleThemeChange}
              checked={theme === 'mydark'}
            />
            <FiSun className='swap-on fill-current w-7 h-7' />
            <FiMoon className='swap-off fill-current w-7 h-7' />
          </label>
        </li>
      </div>
    </div>
  );
};

export default Nav;
