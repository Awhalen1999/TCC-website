import React from 'react';
import logo from '../assets/tcc-logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='footer items-center p-4 bg-base-200 text-base-content font-main'>
      <aside className='items-center grid-flow-col'>
        <img src={logo} alt='logo' className='w-10 h-10' />
        <p>TuftCraft Creations - Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a>
          <FaFacebookF size={24} />
        </a>
        <a>
          <FaInstagram size={24} />
        </a>
        <a>
          <MdOutlineEmail size={24} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
