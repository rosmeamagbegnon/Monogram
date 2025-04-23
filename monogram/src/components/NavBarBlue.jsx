import React, { useState } from 'react';
import { FaLock, FaBars, FaTimes } from 'react-icons/fa';

function NavBarBlue() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-2 md:top-5 z-10 w-full bg-[#ffc4b2]  flex justify-between items-center px-2 md:px-5 py-2 text-[#1a2456]'>
      <img className="h-10 md:h-auto" src="/src/assets/logo.svg" alt="Logo" />
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`absolute lg:relative top-14 lg:top-0 flex-col lg:flex lg:flex-row lg:space-x-8 font-bold text-sm items-center ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <li>HOW IT WORKS</li>
        <li className='relative group'>
          <button className="flex items-center">
            WORKFLOWS
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 50">
              <polygon points="50,35 70,15 30,15" fill="#1a2456" />
            </svg>
          </button>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-40 border rounded">
            <li className="relative group justify-center flex flex-col space-y-2">
              <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">AUDIO CONSOLE</p>
              <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">PHOTO CONSOLE</p>
              <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">VIDEO CONSOLE</p>
              <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">MINI CONSOLE</p>
            </li>
          </ul>
        </li>
        <li>DOWNLOAD</li>
        <li>BLOG</li>
        <li>SUPPORT</li>
        <li>SHOP</li>
        <ul className="flex space-x-2 items-center">
          <li><FaLock className='text-[#1a2456]' size={25} /></li>
          <li className='relative group'>
            <button className="flex items-center">
              JPY
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 50">
                <polygon points="50,35 70,15 30,15" fill="#1a2456" />
              </svg>
            </button>
            <ul className="absolute right-0 hidden group-hover:block bg-white shadow-lg py-2 items-center w-36 border">
              <li className="relative group justify-center flex flex-col">
                <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">USD</p>
                <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">CAD</p>
                <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">EUR</p>
                <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">AUD</p>
                <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">GBP</p>
                <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">KRW</p>
                <p className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">JPY</p>
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default NavBarBlue;
